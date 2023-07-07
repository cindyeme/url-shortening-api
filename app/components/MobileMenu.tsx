'use client';
import { Dispatch, SetStateAction, useRef } from "react";

const MobileMenu = ({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  }) => {
  const container = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (container.current !== null)
      container.current.classList.add("fade-out-bck");
    setTimeout(() => {
      setMenu(!menu);

      if (container.current !== null)
        container.current.classList.remove("fade-out-bck");
    }, 500);
  };

  return (
    <div
      className="w-[100%] h-[100%] fixed top-0 lg:hidden overflow-hidden"
      ref={container}
    >
      <div
        onClick={handleClose}
        onTouchStart={handleClose}
        className="bg-bgMobileMenu fixed top-0 w-[100%] h-[100%] z-0"
      ></div>
      <div
        className="bg-secondary mt-[92px] mx-auto w-[327px] py-[40px] px-[24px] rounded-[10px] text-white z-10 sticky sm:absolute sm:right-[10px] fade-in-right"
        onTouchMove={handleClose}
      >
        <ul className="flex flex-col items-center gap-[34px] border-b-[1px] border-b-grayViolet pb-[34px]">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="flex flex-col gap-[25px]">
          <button className="mt-[30px]">Login</button>
          <button className="bg-primary h-[48px] rounded-[50px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
