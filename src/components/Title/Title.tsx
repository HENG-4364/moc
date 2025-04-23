import style from "./title.module.scss";

interface TitleProps {
  title: React.ReactNode;
  className?: string;
}

export function Title({ title, className = "" }: TitleProps) {
  return (
    <div className={`space-y-2 flex justify-center py-[60px] ${className}`}>
      <div>
        <h2
          className={`text-3xl font-bold text-gray-800 mb-5 text-center ${style.title_font}`}
        >
          {title}
        </h2>
        <div className="flex h-2 items-center justify-center gap-2">
          <div className="h-1 w-24 bg-[#FAB4A2]" />
          <div className="h-1 w-8 bg-[#FE724E]" />
        </div>
      </div>
    </div>
  );
}
