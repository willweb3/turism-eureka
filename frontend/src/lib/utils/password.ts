/**
 * Calculate password strength
 * Returns a number from 0-4
 */
export function calculatePasswordStrength(password: string): number {
  if (!password) return 0;

  let strength = 0;

  // Length check
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;

  // Character type checks
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++; // Mixed case
  if (/[0-9]/.test(password)) strength++; // Numbers
  if (/[^A-Za-z0-9]/.test(password)) strength++; // Special characters

  // Cap at 4
  return Math.min(4, strength);
}

/**
 * Validate password meets requirements
 */
export function validatePasswordRequirements(password: string) {
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password),
  };
}
