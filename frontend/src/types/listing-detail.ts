// import { Listing } from './listing';

/**
 * Review de um usuário
 */
export interface Review {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
}

/**
 * Informações do proprietário/host
 */
export interface Owner {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  memberSince?: string;
  responseRate?: number;
  responseTime?: string;
}

/**
 * Pergunta frequente
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Pacote de viagem relacionado
 */
export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

/**
 * Item do itinerário
 */
export interface ItineraryItem {
  type: 'departure' | 'stop' | 'arrival';
  label: string;
  location: string;
  duration?: string;
}

/**
 * Amenidade/Comodidade
 */
export interface Amenity {
  name: string;
  icon: string;
}

/**
 * Detalhes da experiência
 */
export interface ListingDetails {
  checkIn: string;
  checkOut: string;
  category: string;
  condition: string;
}

/**
 * Informações importantes
 */
export interface ImportantInfo {
  meetingPoint: {
    location: string;
    instructions: string;
  };
  highlights: string[];
  includes: string[];
  notSuitableFor: string[];
}

/**
 * Localização com mapa
 */
export interface Location {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapUrl?: string;
}

/**
 * Pricing detalhado
 */
export interface PricingDetails {
  serviceFee: number;
  taxes: number;
}

/**
 * Operador da atividade
 */
export interface Operator {
  name: string;
  id: string;
}

/**
 * Listing completo para página de detalhes
 * Estende o Listing básico com informações adicionais
 */
export interface ListingDetail {
  // Operador
  operator: Operator;

  // Descrição longa (já existe como description)

  // Detalhes estruturados
  details: ListingDetails;

  // Amenidades
  amenities: Amenity[];

  // Itinerário
  itinerary: ItineraryItem[];

  // Informações importantes
  importantInfo: ImportantInfo;

  // Localização com coordenadas
  location: Location;

  // Reviews
  reviews: Review[];

  // Proprietário
  owner: Owner;

  // FAQ
  faq: FAQ[];

  // Pacotes relacionados
  travelPackages: TravelPackage[];

  // Pricing detalhado
  pricing: PricingDetails;
}
