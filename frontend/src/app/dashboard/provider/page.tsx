"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

interface Listing {
  id: string;
  type: string;
  status: string;
  title_pt: string;
  category: string;
  basePrice: number;
  views: number;
  bookings: number;
  averageRating: number;
  reviewCount: number;
  createdAt: string;
  publishedAt: string | null;
}

export default function ProviderDashboard() {
  const router = useRouter();
  const { user, isProvider, loading: authLoading } = useAuth();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "all" | "draft" | "published" | "archived"
  >("all");

  useEffect(() => {
    if (!authLoading && (!user || !isProvider)) {
      router.push("/auth/login");
    }
  }, [user, isProvider, authLoading, router]);

  useEffect(() => {
    if (!user || !isProvider) return;

    const fetchListings = async () => {
      try {
        const params = new URLSearchParams();
        params.set("providerId", user.id);
        if (filter !== "all") {
          params.set("status", filter);
        }

        const response = await fetch(
          `http://localhost:3002/api/listings?${params.toString()}`
        );
        const data = await response.json();

        if (response.ok) {
          setListings(data.listings);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [user, isProvider, filter]);

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta listagem?")) return;

    try {
      const response = await fetch(`http://localhost:3002/api/listings/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setListings((prev) => prev.filter((listing) => listing.id !== id));
      }
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Minhas Listagens</h1>
          <Link
            href="/dashboard/provider/listings/new"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
          >
            + Nova Listagem
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter("draft")}
            className={`px-4 py-2 rounded-lg ${
              filter === "draft"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            Rascunhos
          </button>
          <button
            onClick={() => setFilter("published")}
            className={`px-4 py-2 rounded-lg ${
              filter === "published"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            Publicadas
          </button>
          <button
            onClick={() => setFilter("archived")}
            className={`px-4 py-2 rounded-lg ${
              filter === "archived"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            Arquivadas
          </button>
        </div>

        {/* Listings */}
        {listings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Nenhuma listagem encontrada
            </h2>
            <p className="text-gray-600 mb-8">
              Comece criando sua primeira experiência, produto ou evento
            </p>
            <Link
              href="/dashboard/provider/listings/new"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
            >
              Criar Primeira Listagem
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{listing.title_pt}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          listing.status === "published"
                            ? "bg-green-100 text-green-800"
                            : listing.status === "draft"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {listing.status === "published"
                          ? "Publicado"
                          : listing.status === "draft"
                          ? "Rascunho"
                          : "Arquivado"}
                      </span>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-600 mb-4">
                      <span>Categoria: {listing.category}</span>
                      <span>Tipo: {listing.type}</span>
                      <span>
                        Preço: €{(listing.basePrice / 100).toFixed(2)}
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Visualizações</div>
                        <div className="font-bold text-lg">{listing.views}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Reservas</div>
                        <div className="font-bold text-lg">
                          {listing.bookings}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">Avaliação</div>
                        <div className="font-bold text-lg">
                          {listing.averageRating
                            ? listing.averageRating.toFixed(1)
                            : "N/A"}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">Reviews</div>
                        <div className="font-bold text-lg">
                          {listing.reviewCount}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/dashboard/provider/listings/${listing.id}/edit`}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(listing.id)}
                      className="px-4 py-2 border border-red-300 rounded-lg text-red-700 hover:bg-red-50"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
