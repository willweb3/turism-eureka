export default function FormDivider({ text = 'ou' }: { text?: string }) {
  return (
    <div className="relative flex items-center my-6">
      <div className="flex-grow border-t border-[#D6D8DF]"></div>
      <span className="flex-shrink mx-4 text-[#777777] font-hanken text-sm">
        {text}
      </span>
      <div className="flex-grow border-t border-[#D6D8DF]"></div>
    </div>
  );
}
