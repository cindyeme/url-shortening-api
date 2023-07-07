"use client";

import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
      <nav className="px-[24px] mt-[40px] mb-[20px] lg:px-[0px]">
        <div className="flex items-center justify-between lg:w-[75%] lg:mx-auto">
          <Image
            src={"/images/logo.svg"}
            width={121}
            height={33}
            alt="Logo Shortly"
          />
          {/* Mobile  */}
          <div onClick={handleMenu} className="lg:hidden cursor-pointer">
            <HiMiniBars3 className="h-8 w-8 text-gray-400" />
          </div>

          {/* Desktop */}
          <div className="w-full hidden lg:flex justify-between items-center ml-[40px]">
            <ul className="flex items-center font-semi-bold gap-[35px] text-gray-400 text-[18px]">
              <li className="hover:text-black hover:cursor-pointer">
                Features
              </li>
              <li className="hover:text-black hover:cursor-pointer">Pricing</li>
              <li className="hover:text-black hover:cursor-pointer">
                Resources
              </li>
            </ul>
            <div className="flex font-semi-bold gap-[30px] text-[18px]">
              <button className="text-gray-400 hover:text-black hover:cursor-pointer">
                Login
              </button>
              <button className="bg-primary text-white w-[105px] h-[45px] rounded-[25px] hover:bg-hover">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
