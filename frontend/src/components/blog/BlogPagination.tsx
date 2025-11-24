'use client';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="inline-flex items-center gap-3">
      {/* Page Numbers */}
      {pages.map((page) => {
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-11 h-11 p-2 rounded-lg shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-center gap-2 transition-all
              ${
                isActive
                  ? 'bg-[#11212D] text-white'
                  : 'bg-white text-[#777777] hover:bg-[#F2F6F8] hover:text-[#11212D]'
              }
            `}
            aria-label={`Page ${page}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="text-center text-base font-hanken font-normal leading-6">
              {page}
            </span>
          </button>
        );
      })}
    </div>
  );
}
