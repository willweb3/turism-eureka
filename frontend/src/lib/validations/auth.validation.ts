import { z } from 'zod';

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido')
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(8, 'Password deve ter no mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Password deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'Password deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'Password deve conter pelo menos um número')
    .regex(/[^A-Za-z0-9]/, 'Password deve conter pelo menos um caractere especial'),

  confirmPassword: z
    .string()
    .min(1, 'Confirmação de password é obrigatória'),

  firstName: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(50, 'Nome muito longo')
    .trim(),

  lastName: z
    .string()
    .min(2, 'Apelido deve ter no mínimo 2 caracteres')
    .max(50, 'Apelido muito longo')
    .trim(),

  userType: z.enum(['tourist', 'provider', 'host'], {
    required_error: 'Tipo de utilizador é obrigatório',
  }),

  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Número de telefone inválido')
    .optional()
    .or(z.literal('')),

  acceptTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Deve aceitar os termos e condições',
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As passwords não coincidem',
  path: ['confirmPassword'],
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
