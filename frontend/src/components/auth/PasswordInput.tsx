'use client';

import { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showStrength?: boolean;
  strengthValue?: number;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, showStrength, strengthValue, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-normal text-white font-hanken">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            className={`
              w-full p-3 pr-12 bg-[#1A1A1A] border rounded-lg text-sm text-white font-hanken placeholder:text-white/40
              focus:outline-none focus:ring-2 focus:ring-[#52C6BB] transition-all
              ${error ? 'border-red-500' : 'border-white/10'}
              ${className || ''}
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          />

          <button
            type="button"
            onClick={togglePassword}
            aria-label={showPassword ? 'Ocultar password' : 'Mostrar password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Password Strength Indicator */}
        {showStrength && strengthValue !== undefined && (
          <div className="space-y-1">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    i < strengthValue
                      ? strengthValue <= 1
                        ? 'bg-[#E53E3E]'
                        : strengthValue <= 2
                        ? 'bg-[#F59E0B]'
                        : strengthValue <= 3
                        ? 'bg-[#10B981]'
                        : 'bg-[#059669]'
                      : 'bg-[#D6D8DF]'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-[#777777] font-hanken">
              {strengthValue === 0 && 'Password muito fraca'}
              {strengthValue === 1 && 'Password fraca'}
              {strengthValue === 2 && 'Password média'}
              {strengthValue === 3 && 'Password forte'}
              {strengthValue === 4 && 'Password muito forte'}
            </p>
          </div>
        )}

        {error && (
          <p id={`${props.id}-error`} className="text-sm text-red-400 font-hanken">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
