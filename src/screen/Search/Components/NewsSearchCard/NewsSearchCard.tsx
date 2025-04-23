import Image from "next/image";

type NewsCardProps = {
  imageSrc: string;
  badge: string;
  date: any;
  title: string;
  description: string;
  onClick: () => void;
};

const NewsSearchCard = ({
  imageSrc,
  badge,
  date,
  title,
  description,
  onClick,
}: NewsCardProps) => (
  <div
    className="bg-[#FFFFFF] rounded-lg shadow-xl mb-4 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
    onClick={onClick}
  >
    <div className={`p-[15px]`}>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 px-3">
        <div className="col-span-1 md:col-span-4 lg:col-span-3 py-2 ">
          <div className="relative w-full">
            <Image
              src={imageSrc}
              alt="ministry"
              className="w-full h-full rounded-lg"
              width={1050}
              height={1068}
              quality={100}
              priority
            />
            <span className="absolute top-2.5 right-2.5 z-10 bg-red-500 text-white text-[10px] font-semibold rounded-full px-3 py-1  outline-none border-none">
              {badge}
            </span>
          </div>
          <div className="flex items-center justify-center pt-5">
            <strong>{date}</strong>
          </div>
        </div>
        <div className="col-span-1 md:col-span-8  lg:col-span-9">
          <div>
            <h4 className="text-xl font-semibold line-clamp-2 leading-9">
              {title}
            </h4>
            <p className="pt-2 text-base line-clamp-3 leading-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default NewsSearchCard;
