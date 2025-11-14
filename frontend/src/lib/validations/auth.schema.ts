import { z } from 'zod';

// Password validation regex patterns
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_PATTERNS = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  special: /[^A-Za-z0-9]/,
};

// Email validation
export const emailSchema = z
  .string()
  .min(1, 'Email é obrigatório')
  .email('Email inválido')
  .max(255, 'Email muito longo');

// Password validation
export const passwordSchema = z
  .string()
  .min(PASSWORD_MIN_LENGTH, `Password deve ter pelo menos ${PASSWORD_MIN_LENGTH} caracteres`)
  .regex(PASSWORD_PATTERNS.uppercase, 'Password deve conter pelo menos uma letra maiúscula')
  .regex(PASSWORD_PATTERNS.lowercase, 'Password deve conter pelo menos uma letra minúscula')
  .regex(PASSWORD_PATTERNS.number, 'Password deve conter pelo menos um número')
  .regex(PASSWORD_PATTERNS.special, 'Password deve conter pelo menos um caractere especial');

// Name validation
export const nameSchema = z
  .string()
  .min(2, 'Nome deve ter pelo menos 2 caracteres')
  .max(50, 'Nome muito longo')
  .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Nome contém caracteres inválidos');

// Sign Up Schema (simplified - no confirm password needed)
export const signUpSchema = z.object({
  email: emailSchema,
  firstName: nameSchema,
  lastName: nameSchema,
  password: passwordSchema,
  confirmPassword: z.string().optional(), // Keep for compatibility but make optional
  acceptTerms: z.boolean().optional().default(true),
});

// Login Schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password é obrigatória'),
  rememberMe: z.boolean().optional().default(false),
});

// Password Reset Schema
export const passwordResetSchema = z.object({
  email: emailSchema,
});

// Update Password Schema
export const updatePasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Confirmação de password é obrigatória'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As passwords não coincidem',
    path: ['confirmPassword'],
  });

// Type exports
export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type PasswordResetInput = z.infer<typeof passwordResetSchema>;
export type UpdatePasswordInput = z.infer<typeof updatePasswordSchema>;
