interface DestinationCardProps {
  title: string;
}

export default function DestinationCard({ title }: DestinationCardProps) {
  return (
    <div className="p-6 bg-white rounded-3xl space-y-4">
      <h2 className="text-2xl font-bold text-[#11212D] font-hanken">
        Destination
      </h2>
      <p className="text-xl font-semibold text-[#777777] font-hanken">
        {title}
      </p>
    </div>
  );
}
