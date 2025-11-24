'use client';

import { ListingStatus } from '@/types/listing';

interface ListingStatusProps {
  status: ListingStatus;
  message?: string;
}

const STATUS_CONFIG = {
  confirmed: {
    label: 'Confirmed',
    color: '#218F51',
    bgColor: 'rgba(33, 143, 81, 0.1)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.3337 4L6.00033 11.3333L2.66699 8"
          stroke="#218F51"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  error: {
    label: 'Error',
    color: '#8B1C1C',
    bgColor: 'rgba(139, 28, 28, 0.1)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
          stroke="#8B1C1C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 5.33334V8.00001"
          stroke="#8B1C1C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.6667H8.00667"
          stroke="#8B1C1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  awaiting_payment: {
    label: 'Awaiting payment',
    color: '#D95B21',
    bgColor: 'rgba(217, 91, 33, 0.1)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
          stroke="#D95B21"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 4.66667V8L10.6667 9.33333"
          stroke="#D95B21"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  draft: {
    label: 'Draft',
    color: '#908C8C',
    bgColor: 'rgba(144, 140, 140, 0.1)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.3337 2.00001C11.5089 1.82491 11.7186 1.68611 11.9501 1.59193C12.1816 1.49775 12.4303 1.44989 12.6813 1.45124C12.9322 1.4526 13.1803 1.50315 13.4107 1.59992C13.6411 1.69669 13.8491 1.83787 14.022 2.01497C14.1949 2.19207 14.3294 2.40165 14.4177 2.63217C14.506 2.86268 14.5463 3.10903 14.5362 3.35586C14.5261 3.60268 14.4659 3.84518 14.3591 4.06895C14.2523 4.29272 14.101 4.49317 13.9137 4.65668L5.00033 13.3333L1.33366 14.6667L2.66699 11L11.3337 2.00001Z"
          stroke="#908C8C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  closed: {
    label: 'Closed',
    color: '#908C8C',
    bgColor: 'rgba(144, 140, 140, 0.1)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.6667 4L4.00001 12.6667M4.00001 4L12.6667 12.6667"
          stroke="#908C8C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  pending_approval: {
    label: 'Pending approval',
    color: '#FCAB08',
    bgColor: 'rgba(252, 171, 8, 0.1)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
          stroke="#FCAB08"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.6667V8"
          stroke="#FCAB08"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 5.33334H8.00667"
          stroke="#FCAB08"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export default function ListingStatusBadge({ status, message }: ListingStatusProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div className="flex flex-col gap-1">
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit font-hanken text-[14px] leading-[21px] font-medium"
        style={{
          backgroundColor: config.bgColor,
          color: config.color,
        }}
      >
        {config.icon}
        <span>{config.label}</span>
      </div>
      {message && (
        <p className="text-[12px] leading-[18px] text-[#908C8C] font-hanken font-normal">
          {message}
        </p>
      )}
    </div>
  );
}
