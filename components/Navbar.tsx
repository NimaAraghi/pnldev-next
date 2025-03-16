import Image from "next/image";
import Link from "next/link";
import React from "react";
import SwitchColor from "./SwitchColor";
import User from "./User";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center sticky right-0 left-0 top-0 z-10 background min-h-[68px] py-0 px-[5%]'>
      <div className='flex justify-between w-2/6'>
        <div>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/images/logo.svg' alt='' width={33} height={33} />
            <h1 className='text-white text-3xl font-semibold pt-2'>PNLdev</h1>
          </Link>
        </div>
        <div className='flex items-center gap-7 text-white text-xl'>
          <span className='cursor-pointer text-lg'>آموزش</span>
          <span className='cursor-pointer text-lg'>کلاس آنلاین</span>
        </div>
      </div>
      <div className='flex gap-6 items-center'>
        <SwitchColor />
        <span className='text-lg text-white'>فا</span>
        <User />
      </div>
    </header>
  );
};

export default Navbar;
