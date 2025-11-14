"use client";

import { useState, useEffect } from "react";

interface Listing {
  id: string;
  title: string;
  description: string;
  price: { amount: number; currency: string } | null;
  images: { id: string; url: string | null }[];
  state: string;
  createdAt: string;
}

export default function TestListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
    setLoading(true);
    try {
      const response = await fetch("/api/sharetribe/listings");
      const result = await response.json();

      if (result.success) {
        setListings(result.data);
      } else {
        setError(result.error || "Erro ao buscar listings");
      }
    } catch (err: any) {
      setError(err.message || "Erro ao buscar listings");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando listings do Sharetribe...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
          <h3 className="font-bold mb-2">Erro</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800">
            AZOREON - Listings
          </h1>
          <p className="text-gray-600 mt-2">
            Total {listings.length} experiências
          </p>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="container mx-auto px-4 py-8">
        {listings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum listing encontrado</p>
            <p className="text-gray-400 mt-2">
              Crie um listing no Console e ele aparecerá aqui!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Placeholder */}
                {listing.images[0]?.url ? (
                  <div className="h-48">
                    <img
                      src={listing.images[0].url}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-700 h-48 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Sem imagem</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">
                    {listing.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {listing.description}
                  </p>

                  {/* Price */}
                  {listing.price && (
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-blue-600">
                        €{listing.price.amount.toFixed(2)}
                      </span>
                      <span className="text-gray-500 ml-2">
                        {listing.price.currency}
                      </span>
                    </div>
                  )}

                  {/* State Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        listing.state === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {listing.state}
                    </span>

                    <span className="text-xs text-gray-400">
                      {new Date(listing.createdAt).toLocaleDateString("pt-PT")}
                    </span>
                  </div>

                  {/* ID (for debugging) */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-mono">
                      ID: {listing.id.substring(0, 8)}...
                    </p>
                  </div>

                  {/* View Button */}
                  <a
                    href={`/api/sharetribe/listings/${listing.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Ver
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
