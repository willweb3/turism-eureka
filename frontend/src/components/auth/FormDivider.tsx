export default function FormDivider({ text = 'or' }: { text?: string }) {
  return (
    <div className="relative flex items-center gap-2">
      <div
        className="flex-1 h-px"
        style={{
          opacity: 0.3,
          background: 'white',
          border: '1px solid #D6D8DF'
        }}
      ></div>
      <span className="text-[#F2F6F8] font-hanken text-[16px] leading-[24px] font-normal">
        {text}
      </span>
      <div
        className="flex-1 h-px"
        style={{
          opacity: 0.3,
          background: 'white',
          border: '1px solid #D6D8DF'
        }}
      ></div>
    </div>
  );
}
