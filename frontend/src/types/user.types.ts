// Core user types
export type UserType = 'tourist' | 'provider' | 'host';

export type UserRole = 'user' | 'admin' | 'moderator';

export interface User {
  id: string; // Supabase user ID
  email: string;
  emailConfirmed: boolean;
  createdAt: string;
  lastSignInAt: string;
  profile: UserProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  sharetribeUserId?: string; // UUID do Sharetribe

  // Basic Info
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  avatarUrl?: string;
  bio?: string;

  // User Type
  userType: UserType;
  isVerified: boolean;
  verificationDate?: string;

  // Location
  country?: string;
  city?: string;
  postalCode?: string;

  // Host Specific
  referralCode?: string;
  companyName?: string;
  taxId?: string;

  // Provider Specific
  businessLicense?: string;
  insurancePolicy?: string;

  // Settings
  preferredLanguage: 'pt' | 'en' | 'fr';
  notificationPreferences: {
    email: boolean;
    sms: boolean;
  };

  // Metadata
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  userType: UserType;
  phoneNumber?: string;
  acceptTerms: boolean;
}

export interface RegisterResponse {
  success: boolean;
  user?: User;
  sharetribeUserId?: string;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface SharetribeUserData {
  email: string;
  firstName: string;
  lastName: string;
  publicData: {
    userType: UserType;
    languages: string[];
    registeredFrom: 'azoreon-web';
  };
  privateData: {
    referralCode?: string;
    phoneNumber?: string;
  };
  protectedData: {
    phoneNumber?: string;
  };
}
