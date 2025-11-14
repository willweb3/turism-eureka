import { SharetribeListing } from '../types';
import { formatCurrency } from '../utils/simulation';

interface ProductCardProps {
  listing: SharetribeListing;
  onSelect: (listing: SharetribeListing) => void;
  isSelected: boolean;
}

export function ProductCard({ listing, onSelect, isSelected }: ProductCardProps) {
  const imageUrl = listing.images[0]?.url || '/placeholder.jpg';
  const price = listing.price ? formatCurrency(listing.price.amount, listing.price.currency) : 'Preço sob consulta';

  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all cursor-pointer ${
        isSelected ? 'ring-2 ring-gray-900 border-gray-900' : 'border-gray-200 hover:border-gray-400'
      }`}
      onClick={() => onSelect(listing)}
    >
      <div className="aspect-video relative bg-gray-100">
        {imageUrl && imageUrl !== '/placeholder.jpg' ? (
          <img
            src={imageUrl}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Sem imagem
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-gray-900 line-clamp-2">{listing.title}</h3>
        {listing.author && (
          <p className="text-sm text-gray-600">Provider: {listing.author.name}</p>
        )}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-lg font-semibold text-gray-900">{price}</span>
          {listing.category && (
            <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
              {listing.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
