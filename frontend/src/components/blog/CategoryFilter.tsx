'use client';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="inline-flex items-center gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-8 py-2 rounded-[48px] text-base font-hanken font-light transition-all flex justify-center items-center gap-2
              ${
                isActive
                  ? 'bg-black text-white'
                  : 'bg-transparent text-[#11212D] outline outline-1 outline-offset-[-1px] outline-[#BFC3C9] hover:outline-[#3CA997] hover:text-[#3CA997]'
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
