// lib/validations/submitListing.ts

import { z } from 'zod';

export const basicInformationSchema = z.object({
  title: z.string()
    .min(10, 'Title must be at least 10 characters')
    .max(100, 'Title must not exceed 100 characters'),

  description: z.string()
    .min(50, 'Description must be at least 50 characters')
    .max(1000, 'Description must not exceed 1000 characters'),

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
  ], {
    errorMap: () => ({ message: 'Please select an island' })
  }),

  category: z.enum([
    'boat-tours',
    'wine-tasting',
    'hiking',
    'cultural-events',
    'products',
    'accommodations'
  ], {
    errorMap: () => ({ message: 'Please select a category' })
  }),

  images: z.array(z.any())
    .min(1, 'Upload at least 1 photo')
    .max(4, 'Maximum 4 photos allowed')
});

export type BasicInformationFormData = z.infer<typeof basicInformationSchema>;

// Schema para Contact & Social (Step 2)
export const contactSocialSchema = z.object({
  phone: z.string()
    .min(9, 'Phone number must be at least 9 digits')
    .max(15, 'Phone number is too long'),

  email: z.string()
    .email('Invalid email address'),

  website: z.string().url('Invalid URL').optional().or(z.literal('')),

  facebook: z.string().url('Invalid Facebook URL').optional().or(z.literal('')),

  instagram: z.string().url('Invalid Instagram URL').optional().or(z.literal(''))
});

export type ContactSocialFormData = z.infer<typeof contactSocialSchema>;

// Schema para Availability (Step 3)
export const availabilitySchema = z.object({
  availableFrom: z.date({
    required_error: 'Start date is required'
  }),

  availableTo: z.date({
    required_error: 'End date is required'
  }),

  capacity: z.number()
    .min(1, 'Capacity must be at least 1')
    .max(100, 'Capacity is too high')
});

export type AvailabilityFormData = z.infer<typeof availabilitySchema>;
