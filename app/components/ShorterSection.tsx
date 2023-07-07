"use client";
import InfoCard from "./InfoCard";
import brandRecog from "../assets/icon-brand-recognition.svg";
import detailRec from "../assets/icon-detailed-records.svg";
import fullyCustom from "../assets/icon-fully-customizable.svg";
import useShortener from "../hooks/useShortener";

const ShorterSection = () => {
  const {
    handleCopyClick,
    handleSubmit,
    setUrl,
    error,
    copiedIndex,
    links,
    url,
  } = useShortener();

  return (
    <section
      className="relative bg-shorterSection px-[24px] pb-[80px] lg:px-[0px]"
      id="linkSec"
    >
      {/* Shorten a link here */}
      <div className="w-full min-h-[160px] bg-bgShortenMobile translate-y-[-80px] bg-secondary bg-contain bg-no-repeat bg-right-top rounded-[10px] lg:w-[75%] lg:mx-[auto] lg:bg-bgShortenDesktop lg:bg-cover">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full p-[24px] flex flex-col gap-[15px] lg:flex-row lg:items-center lg:px-[60px] lg:py-[55px] relative"
        >
          <input
            type="text"
            value={url}
            placeholder="Shorten a link here"
            className={`w-full h-[48px] pl-[15px] outline-none rounded-[8px] ${
              !!error ? "border-2 border-error" : ""
            }`}
            onChange={(e) => setUrl(e.target.value)}
          />
          {!!error && (
            <p className="text-error italic text-[12px] lg:absolute lg:text-[16px] lg:bottom-[27px]">
              {error}
            </p>
          )}
          <button
            className="w-full h-[48px] bg-primary rounded-[8px] text-white lg:w-[190px] hover:bg-hover"
            type="submit"
          >
            Shorten It!
          </button>
        </form>
      </div>

      {/* Shortened Links */}
      <div className="mt-[20px] translate-y-[-80px] lg:w-[75%] lg:mx-auto">
        {links.length > 0 &&
          links.map((link, index) => {
            return (
              <div
                key={link.code}
                className="mt-[20px] bg-white w-full h-full flex flex-col rounded-[10px] overflow-x-hidden lg:px-[10px] lg:py-[5px] lg:flex-row lg:justify-between"
              >
                <a
                  className="overflow-x-hidden border-b-[1px] border-gray-300 p-[15px] lg:border-none"
                  href={link.full_short_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-[16px]">{link.original_link}</p>
                </a>

                <div className="lg:flex lg:items-center">
                  <a
                    className="p-[15px] text-primary inline-block"
                    href={link.full_short_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.full_short_link}
                  </a>
                  <div className="px-[15px] pb-[15px] lg:pb-0">
                    <button
                      onClick={handleCopyClick.bind(null, index)}
                      className={`w-full h-[40px] ${
                        copiedIndex === index ? "bg-secondary" : "bg-primary"
                      }  text-white rounded-[8px] transition-all hover:bg-hover lg:w-[103px] lg:h-[40px]`}
                    >
                      {copiedIndex === index ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Section */}
      <div className="lg:w-[75%] lg:mx-auto">
        <h2 className="mb-[20px] text-darkViolet text-center text-[27px] font-bold lg:text-4xl lg:mb-[30px]">
          Advanced Statistics
        </h2>
        <p className="text-center text-[16px] text-gray-400 mb-[95px] lg:text-[18px] lg:max-w-[530px] lg:mx-auto lg:leading-9">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        {/* Cards Container*/}
        <div className="relative px-[24px] flex flex-col gap-[90px] lg:px-0 ">
          <div className="bg-teal-400 w-2 h-full absolute top-0 left-1/2 -translate-x-1/2 lg:h-2 lg:top-1/2 lg:right-0 lg:-translate-x-0 lg:left-0 lg:w-full" />
          {/* Card Brand Recognition */}
          <InfoCard
            icon={brandRecog}
            title="Brand Recognition"
            subTitle=" Boost your brand recognition with each click. Generic links
              don't mean a thing. Branded links help instil confidence in
              your content."
            className="md:h-[270px] md:px-[35px]"
          />

          {/* Card Detailed Records*/}
          <InfoCard
            icon={detailRec}
            title="Detailed Records"
            subTitle="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            className="md:h-[270px] md:px-[35px] desktop:mt-[45px]"
          />

          {/* Card Fully Customizable */}
          <InfoCard
            icon={fullyCustom}
            title="Fully Customizable"
            subTitle="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            className="md:self-end md:h-[270px] md:px-[35px] desktop:mt-[90px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ShorterSection;
