// lib/validations/submitListing.ts

import { z } from 'zod';

export const basicInformationSchema = z.object({
  title: z.string().optional(),

  description: z.string().optional(),

  island: z.enum([
    'sao-miguel',
    'terceira',
    'pico',
    'faial',
    'sao-jorge',
    'graciosa',
    'santa-maria',
    'corvo',
    'flores'
  ]).optional(),

  category: z.enum([
    'boat-tours',
    'wine-tasting',
    'hiking',
    'cultural-events',
    'products',
    'accommodations'
  ]).optional(),

  images: z.array(z.any()).optional()
});

export type BasicInformationFormData = z.infer<typeof basicInformationSchema>;

// Schema para Contact & Social (Step 2)
export const contactSocialSchema = z.object({
  phoneNumber: z.string().optional(),
  website: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional()
});

export type ContactSocialFormData = z.infer<typeof contactSocialSchema>;

// Schema para Availability (Step 3)
export const availabilitySchema = z.object({
  pricePerPerson: z.number().optional(),
  duration: z.string().optional(),
  maxGroupSize: z.number().optional(),
  availability: z.string().optional()
});

export type AvailabilityFormData = z.infer<typeof availabilitySchema>;
