import Image from "next/image";

type Props = {
  icon: any;
  title: string;
  subTitle: string;
  className?: string;
};
const InfoCard = ({ icon, title, subTitle, className }: Props) => {
  return (
    <div
      className={`bg-white relative pt-[70px] px-[20px] pb-[45px] rounded-[10px]  lg:self-start ${className}`}
    >
      <div className="w-[90px] h-[90px] bg-secondary absolute top-[-45px] left-[50%] -translate-x-[50%] rounded-full flex justify-center items-center md:left-[25%]">
        <Image width={0} height={0} src={icon} alt="" />
      </div>
      <h3 className="text-center font-bold text-[18px] text-darkViolet md:text-start md:text-[22px]">
        {title}
      </h3>
      <p className="text-[14px] text-gray-400 mt-[10px] text-center leading-6 md:text-start md:text-[15px] md:leading-7">
        {subTitle}
      </p>
    </div>
  );
};

export default InfoCard