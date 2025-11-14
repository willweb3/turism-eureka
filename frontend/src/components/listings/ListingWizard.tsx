'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type ListingType = 'service' | 'product' | 'event'

interface ListingFormData {
  // Basic info
  type: ListingType
  category: string
  title_pt: string
  title_en: string
  title_fr: string
  short_desc_pt: string
  short_desc_en: string
  short_desc_fr: string
  full_desc_pt: string
  full_desc_en: string
  full_desc_fr: string
  tags: string[]

  // Experience details
  duration?: number
  minParticipants?: number
  maxParticipants?: number
  meetingPoint?: string
  location?: { address: string; coordinates: { lat: number; lng: number } }
  includes: string[]
  requirements?: string

  // Product details
  weight?: number
  dimensions?: { length: number; width: number; height: number }
  stock?: number
  origin?: string
  certifications: string[]

  // Pricing
  pricingType: string
  basePrice: number
  discountPrice?: number
  groupDiscounts?: Array<{ minSize: number; discountPercent: number }>

  // Availability
  weekdays: number[]
  timeSlots?: Array<{ start: string; end: string; capacity: number }>
  exceptions?: Array<{ date: string; reason: string; blocked: boolean }>

  // Media
  mainImage?: string
  gallery: string[]
  video?: string
  documents: string[]

  // Policies
  cancellation: string
  cancellationText?: string
  weatherPolicy: boolean
  importantInfo?: string
  wheelchairOk: boolean
  childFriendly: boolean
  elderlyFriendly: boolean
  petsAllowed: boolean

  // Commissions
  platformPercent: number
  hostPercent: number
  acceptsPromos: boolean
}

const STEPS = [
  'Informações Básicas',
  'Detalhes',
  'Preço e Disponibilidade',
  'Mídia',
  'Políticas',
  'Multilíngue (Opcional)',
  'Revisão',
]

export default function ListingWizard({
  providerId,
  initialData,
  isEditing = false,
}: {
  providerId: string
  initialData?: any
  isEditing?: boolean
}) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getInitialFormData = (): ListingFormData => {
    if (initialData) {
      // Convert prices from cents to euros when loading existing data
      return {
        type: initialData.type || 'service',
        category: initialData.category || '',
        title_pt: initialData.title_pt || '',
        title_en: initialData.title_en || '',
        title_fr: initialData.title_fr || '',
        short_desc_pt: initialData.short_desc_pt || '',
        short_desc_en: initialData.short_desc_en || '',
        short_desc_fr: initialData.short_desc_fr || '',
        full_desc_pt: initialData.full_desc_pt || '',
        full_desc_en: initialData.full_desc_en || '',
        full_desc_fr: initialData.full_desc_fr || '',
        tags: initialData.tags || [],
        duration: initialData.duration,
        minParticipants: initialData.minParticipants,
        maxParticipants: initialData.maxParticipants,
        meetingPoint: initialData.meetingPoint,
        location: initialData.location,
        includes: initialData.includes || [],
        requirements: initialData.requirements,
        weight: initialData.weight,
        dimensions: initialData.dimensions,
        stock: initialData.stock,
        origin: initialData.origin,
        certifications: initialData.certifications || [],
        pricingType: initialData.pricingType || 'per_person',
        basePrice: initialData.basePrice ? initialData.basePrice / 100 : 0,
        discountPrice: initialData.discountPrice ? initialData.discountPrice / 100 : undefined,
        groupDiscounts: initialData.groupDiscounts,
        weekdays: initialData.weekdays || [],
        timeSlots: initialData.timeSlots,
        exceptions: initialData.exceptions,
        mainImage: initialData.mainImage,
        gallery: initialData.gallery || [],
        video: initialData.video,
        documents: initialData.documents || [],
        cancellation: initialData.cancellation || 'full_48h',
        cancellationText: initialData.cancellationText,
        weatherPolicy: initialData.weatherPolicy || false,
        importantInfo: initialData.importantInfo,
        wheelchairOk: initialData.wheelchairOk || false,
        childFriendly: initialData.childFriendly || false,
        elderlyFriendly: initialData.elderlyFriendly || false,
        petsAllowed: initialData.petsAllowed || false,
        platformPercent: initialData.platformPercent || 10.0,
        hostPercent: initialData.hostPercent || 5.0,
        acceptsPromos: initialData.acceptsPromos !== undefined ? initialData.acceptsPromos : true,
      }
    }

    return {
      type: 'service',
      category: '',
      title_pt: '',
      title_en: '',
      title_fr: '',
      short_desc_pt: '',
      short_desc_en: '',
      short_desc_fr: '',
      full_desc_pt: '',
      full_desc_en: '',
      full_desc_fr: '',
      tags: [],
      includes: [],
      certifications: [],
      pricingType: 'per_person',
      basePrice: 0,
      weekdays: [],
      gallery: [],
      documents: [],
      cancellation: 'full_48h',
      weatherPolicy: false,
      wheelchairOk: false,
      childFriendly: false,
      elderlyFriendly: false,
      petsAllowed: false,
      platformPercent: 10.0,
      hostPercent: 5.0,
      acceptsPromos: true,
    }
  }

  const [formData, setFormData] = useState<ListingFormData>(getInitialFormData())

  const updateFormData = (updates: Partial<ListingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async (status: 'draft' | 'published') => {
    setError('')
    setLoading(true)

    try {
      const payload = {
        ...formData,
        providerId,
        status,
        basePrice: Math.round(formData.basePrice * 100), // Convert to cents
        discountPrice: formData.discountPrice
          ? Math.round(formData.discountPrice * 100)
          : null,
      }

      const url = isEditing
        ? `http://localhost:3002/api/listings/${initialData.id}`
        : 'http://localhost:3002/api/listings'
      const method = isEditing ? 'PUT' : 'POST'

      console.log(`${isEditing ? 'Updating' : 'Creating'} listing with payload:`, payload)

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('API error response:', data)
        throw new Error(data.error || `Erro ao ${isEditing ? 'atualizar' : 'criar'} listagem`)
      }

      console.log(`Listing ${isEditing ? 'updated' : 'created'} successfully:`, data)
      router.push('/dashboard/provider')
    } catch (err: any) {
      setError(err.message || `Erro ao ${isEditing ? 'atualizar' : 'criar'} listagem`)
      console.error(`${isEditing ? 'Update' : 'Create'} listing error:`, err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex gap-8">
      {/* Sidebar with Progress Steps */}
      <div className="w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
          <h3 className="text-lg font-semibold mb-6">Passos</h3>
          <div className="space-y-4">
            {STEPS.map((step, index) => {
              // In edit mode, allow navigation to all steps
              // In create mode, only allow navigation to visited steps
              const canNavigate = isEditing || index <= currentStep

              return (
                <button
                  key={step}
                  onClick={() => canNavigate && setCurrentStep(index)}
                  disabled={!canNavigate}
                  className={`flex items-start gap-3 w-full text-left transition-colors ${
                    index === currentStep ? 'text-primary-600' : 'text-gray-500'
                  } ${
                    canNavigate
                      ? 'cursor-pointer hover:text-primary-500'
                      : 'cursor-not-allowed opacity-50'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      canNavigate
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    } ${canNavigate && index !== currentStep ? 'hover:bg-primary-700' : ''}`}
                  >
                    {isEditing || index < currentStep ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <span
                      className={`text-sm font-medium ${
                        index === currentStep ? 'text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Error Display */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {currentStep === 0 && (
            <StepBasicInfo formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 1 && (
            <StepDetails formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <StepPricingAvailability formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <StepMedia formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 4 && (
            <StepPolicies formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 5 && (
            <StepMultilingual formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 6 && <StepReview formData={formData} />}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Voltar
          </button>

          <div className="flex gap-4">
            {currentStep === STEPS.length - 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => handleSubmit('draft')}
                  disabled={loading}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  {isEditing ? 'Salvar Alterações' : 'Salvar como Rascunho'}
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit('published')}
                  disabled={loading}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
                >
                  {isEditing ? 'Atualizar e Publicar' : 'Publicar'}
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Próximo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 1: Basic Information
function StepBasicInfo({
  formData,
  updateFormData,
}: {
  formData: ListingFormData
  updateFormData: (updates: Partial<ListingFormData>) => void
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Informações Básicas</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tipo de Listagem
        </label>
        <select
          value={formData.type}
          onChange={(e) => {
            const newType = e.target.value as ListingType
            updateFormData({
              type: newType,
              pricingType: newType === 'product' ? 'unit' : 'per_person'
            })
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="service">Experiência/Serviço</option>
          <option value="product">Produto</option>
          <option value="event">Evento</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => updateFormData({ category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          placeholder="Ex: Tours, Gastronomia, Artesanato"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Título *
        </label>
        <input
          type="text"
          value={formData.title_pt}
          onChange={(e) => updateFormData({ title_pt: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          placeholder="Título da listagem"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Descrição Curta
        </label>
        <textarea
          value={formData.short_desc_pt}
          onChange={(e) => updateFormData({ short_desc_pt: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          rows={2}
          placeholder="Breve descrição"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Descrição Completa
        </label>
        <textarea
          value={formData.full_desc_pt}
          onChange={(e) => updateFormData({ full_desc_pt: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          rows={4}
          placeholder="Descrição detalhada"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags (separadas por vírgula)
        </label>
        <input
          type="text"
          value={formData.tags.join(', ')}
          onChange={(e) =>
            updateFormData({ tags: e.target.value.split(',').map((t) => t.trim()) })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          placeholder="natureza, aventura, família"
        />
      </div>
    </div>
  )
}

// Step 2: Details
function StepDetails({
  formData,
  updateFormData,
}: {
  formData: ListingFormData
  updateFormData: (updates: Partial<ListingFormData>) => void
}) {
  const isExperience = formData.type === 'service' || formData.type === 'event'
  const isProduct = formData.type === 'product'

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Detalhes</h2>

      {isExperience && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duração (minutos)
            </label>
            <input
              type="number"
              value={formData.duration || ''}
              onChange={(e) =>
                updateFormData({ duration: e.target.value ? parseInt(e.target.value) : undefined })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="120"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Participantes Mínimos
              </label>
              <input
                type="number"
                value={formData.minParticipants || ''}
                onChange={(e) =>
                  updateFormData({
                    minParticipants: e.target.value ? parseInt(e.target.value) : undefined,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Participantes Máximos
              </label>
              <input
                type="number"
                value={formData.maxParticipants || ''}
                onChange={(e) =>
                  updateFormData({
                    maxParticipants: e.target.value ? parseInt(e.target.value) : undefined,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ponto de Encontro
            </label>
            <input
              type="text"
              value={formData.meetingPoint || ''}
              onChange={(e) => updateFormData({ meetingPoint: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Praça Central"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Incluído (separado por vírgula)
            </label>
            <input
              type="text"
              value={formData.includes.join(', ')}
              onChange={(e) =>
                updateFormData({ includes: e.target.value.split(',').map((i) => i.trim()) })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Guia, Equipamento, Seguro"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Requisitos</label>
            <textarea
              value={formData.requirements || ''}
              onChange={(e) => updateFormData({ requirements: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              rows={3}
              placeholder="Condição física moderada, idade mínima 12 anos"
            />
          </div>
        </>
      )}

      {isProduct && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Peso (kg)</label>
            <input
              type="number"
              step="0.01"
              value={formData.weight || ''}
              onChange={(e) =>
                updateFormData({ weight: e.target.value ? parseFloat(e.target.value) : undefined })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="0.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estoque</label>
            <input
              type="number"
              value={formData.stock || ''}
              onChange={(e) =>
                updateFormData({ stock: e.target.value ? parseInt(e.target.value) : undefined })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Origem</label>
            <input
              type="text"
              value={formData.origin || ''}
              onChange={(e) => updateFormData({ origin: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Ilha do Pico"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certificações (separadas por vírgula)
            </label>
            <input
              type="text"
              value={formData.certifications.join(', ')}
              onChange={(e) =>
                updateFormData({
                  certifications: e.target.value.split(',').map((c) => c.trim()),
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Orgânico, Certificado DOP"
            />
          </div>
        </>
      )}
    </div>
  )
}

// Step 3: Pricing and Availability
function StepPricingAvailability({
  formData,
  updateFormData,
}: {
  formData: ListingFormData
  updateFormData: (updates: Partial<ListingFormData>) => void
}) {
  const isProduct = formData.type === 'product'
  const isExperienceOrEvent = formData.type === 'service' || formData.type === 'event'

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Preço e Disponibilidade</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Preço</label>
        <select
          value={formData.pricingType}
          onChange={(e) => updateFormData({ pricingType: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
        >
          {isProduct ? (
            <option value="unit">Por Unidade</option>
          ) : (
            <>
              <option value="per_person">Por Pessoa</option>
              <option value="fixed_group">Grupo Fixo</option>
            </>
          )}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preço Base (€)</label>
          <input
            type="number"
            step="0.01"
            value={formData.basePrice || ''}
            onChange={(e) =>
              updateFormData({ basePrice: e.target.value ? parseFloat(e.target.value) : 0 })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            placeholder="50.00"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preço com Desconto (€)
          </label>
          <input
            type="number"
            step="0.01"
            value={formData.discountPrice || ''}
            onChange={(e) =>
              updateFormData({
                discountPrice: e.target.value ? parseFloat(e.target.value) : undefined,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            placeholder="45.00"
          />
        </div>
      </div>

      {isExperienceOrEvent && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dias da Semana Disponíveis
          </label>
          <div className="grid grid-cols-7 gap-2">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => (
              <label key={index} className="flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={formData.weekdays.includes(index)}
                  onChange={(e) => {
                    const newWeekdays = e.target.checked
                      ? [...formData.weekdays, index]
                      : formData.weekdays.filter((d) => d !== index)
                    updateFormData({ weekdays: newWeekdays.sort() })
                  }}
                  className="mr-1"
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Step 4: Media
function StepMedia({
  formData,
  updateFormData,
}: {
  formData: ListingFormData
  updateFormData: (updates: Partial<ListingFormData>) => void
}) {
  const mainImageInputRef = React.useRef<HTMLInputElement>(null)
  const galleryInputRef = React.useRef<HTMLInputElement>(null)

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // For now, create a temporary URL - in production this would upload to storage
      const url = URL.createObjectURL(file)
      updateFormData({ mainImage: url })
    }
  }

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // For now, create temporary URLs - in production this would upload to storage
      const urls = Array.from(files).map((file) => URL.createObjectURL(file))
      updateFormData({ gallery: [...formData.gallery, ...urls] })
    }
  }

  const removeGalleryImage = (index: number) => {
    const newGallery = formData.gallery.filter((_, i) => i !== index)
    updateFormData({ gallery: newGallery })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mídia</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Imagem Principal</label>
        <input
          ref={mainImageInputRef}
          type="file"
          accept="image/*"
          onChange={handleMainImageChange}
          className="hidden"
        />
        {formData.mainImage ? (
          <div className="relative">
            <img
              src={formData.mainImage}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => updateFormData({ mainImage: undefined })}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div
            onClick={() => mainImageInputRef.current?.click()}
            className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-gray-50 transition"
          >
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-600">Clique para selecionar imagem</p>
            <p className="text-xs text-gray-500">PNG, JPG até 10MB</p>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Galeria de Imagens
        </label>
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleGalleryChange}
          className="hidden"
        />
        <div
          onClick={() => galleryInputRef.current?.click()}
          className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-gray-50 transition"
        >
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <p className="mt-2 text-sm text-gray-600">Clique para adicionar imagens</p>
          <p className="text-xs text-gray-500">Você pode selecionar múltiplas imagens</p>
        </div>
        {formData.gallery.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {formData.gallery.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Step 5: Policies
function StepPolicies({
  formData,
  updateFormData,
}: {
  formData: ListingFormData
  updateFormData: (updates: Partial<ListingFormData>) => void
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Políticas</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Política de Cancelamento
        </label>
        <select
          value={formData.cancellation}
          onChange={(e) => updateFormData({ cancellation: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="full_48h">Reembolso total até 48h antes</option>
          <option value="full_24h">Reembolso total até 24h antes</option>
          <option value="partial">Reembolso parcial</option>
          <option value="no_refund">Sem reembolso</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Informações Importantes
        </label>
        <textarea
          value={formData.importantInfo || ''}
          onChange={(e) => updateFormData({ importantInfo: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          rows={3}
          placeholder="Informações importantes para os clientes"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">Acessibilidade e Adequação</h3>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.weatherPolicy}
            onChange={(e) => updateFormData({ weatherPolicy: e.target.checked })}
            className="mr-2"
          />
          Política de Mau Tempo
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.wheelchairOk}
            onChange={(e) => updateFormData({ wheelchairOk: e.target.checked })}
            className="mr-2"
          />
          Acessível para Cadeira de Rodas
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.childFriendly}
            onChange={(e) => updateFormData({ childFriendly: e.target.checked })}
            className="mr-2"
          />
          Adequado para Crianças
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.elderlyFriendly}
            onChange={(e) => updateFormData({ elderlyFriendly: e.target.checked })}
            className="mr-2"
          />
          Adequado para Idosos
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.petsAllowed}
            onChange={(e) => updateFormData({ petsAllowed: e.target.checked })}
            className="mr-2"
          />
          Permite Animais de Estimação
        </label>
      </div>
    </div>
  )
}

// Step 6: Multilingual (Optional)
function StepMultilingual({
  formData,
  updateFormData,
}: {
  formData: ListingFormData
  updateFormData: (updates: Partial<ListingFormData>) => void
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Conteúdo Multilíngue</h2>
        <p className="text-gray-600 text-sm mb-6">
          Opcional: Adicione traduções para alcançar mais visitantes internacionais
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-lg border-b pb-2">🇬🇧 English</h3>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Title</label>
          <input
            type="text"
            value={formData.title_en}
            onChange={(e) => updateFormData({ title_en: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            placeholder="Title in English"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Short Description</label>
          <textarea
            value={formData.short_desc_en}
            onChange={(e) => updateFormData({ short_desc_en: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            rows={2}
            placeholder="Short description in English"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Description</label>
          <textarea
            value={formData.full_desc_en}
            onChange={(e) => updateFormData({ full_desc_en: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            rows={3}
            placeholder="Full description in English"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-lg border-b pb-2">🇫🇷 Français</h3>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Titre</label>
          <input
            type="text"
            value={formData.title_fr}
            onChange={(e) => updateFormData({ title_fr: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            placeholder="Titre en français"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Brève description</label>
          <textarea
            value={formData.short_desc_fr}
            onChange={(e) => updateFormData({ short_desc_fr: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            rows={2}
            placeholder="Brève description en français"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Description complète</label>
          <textarea
            value={formData.full_desc_fr}
            onChange={(e) => updateFormData({ full_desc_fr: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            rows={3}
            placeholder="Description complète en français"
          />
        </div>
      </div>
    </div>
  )
}

// Step 7: Review
function StepReview({ formData }: { formData: ListingFormData }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Revisão</h2>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Informações Básicas</h3>
        <p>
          <strong>Tipo:</strong> {formData.type}
        </p>
        <p>
          <strong>Categoria:</strong> {formData.category}
        </p>
        <p>
          <strong>Título:</strong> {formData.title_pt}
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Preço</h3>
        <p>
          <strong>Tipo de Preço:</strong> {formData.pricingType}
        </p>
        <p>
          <strong>Preço Base:</strong> €{formData.basePrice.toFixed(2)}
        </p>
        {formData.discountPrice && (
          <p>
            <strong>Preço com Desconto:</strong> €{formData.discountPrice.toFixed(2)}
          </p>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Disponibilidade</h3>
        <p>
          <strong>Dias:</strong>{' '}
          {formData.weekdays.length > 0
            ? formData.weekdays.map((d) => ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][d]).join(', ')
            : 'Todos os dias'}
        </p>
      </div>
    </div>
  )
}
