interface UnderlineTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function UnderlineTitle({ children, className }: UnderlineTitleProps) {
  return (
    <div className={className}>
      <h2 className="inline-block text-[22px] font-semibold">{children}</h2>
      <div className="relative mt-0.5">
        <div className="absolute h-[1px] w-full bg-gray-200" />
        <div className="absolute h-[1px] w-12 bg-[#2980B9]" />
      </div>
    </div>
  );
}
