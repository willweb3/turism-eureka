'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Listing } from '@/types/database.types'
import { formatPrice } from '@/lib/utils'

interface BookingFormProps {
  listing: Listing
}

export default function BookingForm({ listing }: BookingFormProps) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [date, setDate] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const total = listing.price_per_unit * quantity

  const handleBooking = () => {
    // Store booking in localStorage for checkout
    const bookingData = {
      items: [
        {
          listing_id: listing.id,
          listing,
          quantity,
          booking_date: date || null,
        },
      ],
      promo_code: promoCode || null,
    }

    localStorage.setItem('checkout', JSON.stringify(bookingData))
    router.push('/checkout')
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Reservar</h3>

      <div className="space-y-4">
        {/* Quantity */}
        {listing.type === 'service' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nº de Pessoas
              </label>
              <input
                type="number"
                min="1"
                max={listing.max_capacity || undefined}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {listing.max_capacity && (
                <p className="text-xs text-gray-500 mt-1">
                  Capacidade máxima: {listing.max_capacity}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </>
        )}

        {listing.type === 'product' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantidade
            </label>
            <input
              type="number"
              min="1"
              max={listing.stock || undefined}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {listing.stock !== null && (
              <p className="text-xs text-gray-500 mt-1">
                Stock disponível: {listing.stock}
              </p>
            )}
          </div>
        )}

        {/* Promo Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Código Promocional (opcional)
          </label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            placeholder="AZOREON-XXXXX"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Total */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">{formatPrice(total, listing.currency)}</span>
          </div>
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total</span>
            <span className="text-primary-600">{formatPrice(total, listing.currency)}</span>
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          disabled={listing.type === 'service' && !date}
          className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {listing.type === 'product' ? 'Adicionar ao Carrinho' : 'Reservar Agora'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Não será cobrado ainda
        </p>
      </div>
    </div>
  )
}
