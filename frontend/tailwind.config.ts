import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom breakpoints based on Figma design specs
      screens: {
        'xs': '320px',   // Mobile (base)
        'sm': '640px',   // Tablet
        'md': '640px',   // Tablet
        'lg': '1024px',  // Laptop
        'xl': '1280px',  // Desktop
        '2xl': '1536px', // Desktop Large
      },
      // Design System spacing tokens
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
      },
      // Container max-widths based on Figma specs
      maxWidth: {
        'xs': '288px',    // Mobile content width
        'sm': '576px',    // Tablet content width
        'md': '576px',    // Tablet content width
        'lg': '960px',    // Laptop content width
        'xl': '1216px',   // Desktop content width
        '2xl': '1312px',  // Desktop Large content width
      },
      // Grid columns configuration
      gridTemplateColumns: {
        '4': 'repeat(4, minmax(0, 1fr))',   // Mobile
        '8': 'repeat(8, minmax(0, 1fr))',   // Tablet
        '12': 'repeat(12, minmax(0, 1fr))',  // Desktop
      },
      // Gap values based on Figma gutters
      gap: {
        'gutter-mobile': '16px',
        'gutter-tablet': '32px',
        'gutter-desktop': '32px',
      },
      colors: {
        // Azoreon brand colors
        brand: {
          'blue': '#11212D',
          'neutral': '#BFC3C9',
        },
        // AZOREON Homepage specific colors
        primary: {
          400: '#5DCABF',
          500: '#52C6BB',
          600: '#3FA08F',
        },
        secondary: '#E57643',
        accent: '#FFBA33',
        dark: {
          900: '#11212D',
          800: '#2A2D32',
        },
        // Design System color palettes (12 palettes with 11 shades each)
        teal: {
          50: '#D7F4F0',
          100: '#C3EEE8',
          200: '#70D1C2',
          300: '#52C6BB',
          400: '#1DB0A2',
          500: '#13948A',
          600: '#10827A',
          700: '#0C665F',
          800: '#094A45',
          900: '#052E2B',
          950: '#021210',
        },
        blue: {
          50: '#EAF6FC',
          100: '#CCE8F7',
          200: '#99D2EF',
          300: '#66BBE6',
          400: '#41AADF',
          500: '#0E97CF',
          600: '#0C80B0',
          700: '#096180',
          800: '#064150',
          900: '#032130',
          950: '#010E17',
        },
        yellow: {
          50: '#FEF9E7',
          100: '#FEF4CF',
          200: '#FCE89F',
          300: '#FBDC70',
          400: '#FAD352',
          500: '#F8C521',
          600: '#D5A20B',
          700: '#B17E08',
          800: '#8E5A06',
          900: '#6A3604',
          950: '#3F1B02',
        },
        orange: {
          50: '#FFF0E5',
          100: '#FFE1CC',
          200: '#FFC399',
          300: '#FFA666',
          400: '#FF8A3F',
          500: '#FF6D0D',
          600: '#D9510C',
          700: '#B33508',
          800: '#8D1905',
          900: '#660103',
          950: '#400001',
        },
        red: {
          50: '#FEE5E9',
          100: '#FCCBD2',
          200: '#FA97A6',
          300: '#F7637A',
          400: '#F5405C',
          500: '#F21330',
          600: '#CF0C2C',
          700: '#AC0721',
          800: '#890216',
          900: '#66000E',
          950: '#430007',
        },
        green: {
          50: '#E7F7EC',
          100: '#D0EFD9',
          200: '#A0DFB4',
          300: '#71CF8E',
          400: '#51C274',
          500: '#22AE51',
          600: '#159540',
          700: '#0F7C2F',
          800: '#09631F',
          900: '#054A10',
          950: '#023106',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
          950: '#0D0F12',
        },
        purple: {
          50: '#F3E8FA',
          100: '#E6D1F5',
          200: '#CEA3EB',
          300: '#B574E0',
          400: '#A252D8',
          500: '#8A26CD',
          600: '#7519B0',
          700: '#601193',
          800: '#4A0976',
          900: '#350459',
          950: '#1F013C',
        },
        pink: {
          50: '#FCE8F2',
          100: '#F9D1E6',
          200: '#F4A3CD',
          300: '#EE75B4',
          400: '#EA549F',
          500: '#E52687',
          600: '#C71A73',
          700: '#A9105F',
          800: '#8B084B',
          900: '#6D0237',
          950: '#4F0023',
        },
        indigo: {
          50: '#E8EBFA',
          100: '#D1D7F5',
          200: '#A3AFEB',
          300: '#7587E0',
          400: '#5466D8',
          500: '#263ECD',
          600: '#1C2FB0',
          700: '#132093',
          800: '#0B1176',
          900: '#050659',
          950: '#01013C',
        },
        forest: {
          50: '#E8F0EA',
          100: '#D1E1D5',
          200: '#A3C3AB',
          300: '#75A582',
          400: '#548E63',
          500: '#2D703E',
          600: '#1F5D2E',
          700: '#154A1F',
          800: '#0C3710',
          900: '#052407',
          950: '#010402',
        },
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        hanken: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        lufga: ['Lufga', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
