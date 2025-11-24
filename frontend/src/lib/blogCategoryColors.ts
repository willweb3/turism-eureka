export const categoryColors = {
  Adventure: {
    bg: 'bg-[#FEE2D1]',
    text: 'text-[#D95B21]',
  },
  Cities: {
    bg: 'bg-[#D7F4F0]',
    text: 'text-[#306B64]',
  },
  Nature: {
    bg: 'bg-black',
    text: 'text-white',
  },
  Ocean: {
    bg: 'bg-[#D7E6F0]',
    text: 'text-[#2C4E63]',
  },
  Gastronomy: {
    bg: 'bg-[#FFEED2]',
    text: 'text-[#A37005]',
  },
} as const;

export type CategoryName = keyof typeof categoryColors;
