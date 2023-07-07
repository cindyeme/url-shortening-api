import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="pr-[24px] overflow-x-hidden mb-[150px] lg:px-0 lg:mt-[75px]"
      id="linkSec"
    >
      <div className="flex flex-col gap-[50px] lg:w-[75%] lg:mx-auto lg:flex-row-reverse lg:gap-[80px]">
        <div className="lg:box-border flex justify-center lg:w-[30%]">
          <Image
            width={500}
            height={500}
            src={"/images/illustration-working.svg"}
            alt="Illustration"
            className="min-w-[500px] lg:min-w-[650px] md:mx-auto"
          />
        </div>
        <div className="flex flex-col gap-[30px] items-center lg:w-[70%] lg:items-start lg:justify-center">
          <h1 className="font-bold text-4xl !leading-tight text-center lg:text-7xl lg:text-start text-secondary">
            More than just shorter links
          </h1>
          <p className="text-center text-[18px] text-gray-400 lg:text-start lg:w-[80%] lg:text-[22px]">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="w-[200px] h-[55px] bg-primary hover:bg-hover text-[18px] font-semibold text-white rounded-[50px] lg:text-[22px] lg:w-[220px] lg:h-[60px]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;