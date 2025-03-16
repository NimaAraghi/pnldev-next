import React from "react";
import Road from "./Road";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(-90deg, var(--l-green-dark), var(--l-dark) 60%)",
      }}
      className='py-7'>
      <div className='flex justify-between items-center'>
        <div className='w-[40%] opacity-0'>
          <Road />
        </div>
        <div className='text-3xl font-bold text-white'>[از کجا شروع کنم؟]</div>
        <div className='w-[40%]'>
          <Road />
        </div>
      </div>
      <div className='my-10 relative'>
        <Road />
        <img
          src='/images/trex-driver.gif'
          alt='trex driver gif'
          className='w-80 absolute left-0 -bottom-10'
        />
      </div>
      <div className='flex justify-center gap-14'>
        <div className='text-white text-lg'>توسعه وب</div>
        <div className='text-white text-lg'>بک اند</div>
        <div className='text-white text-lg'>فرانت اند</div>
        <div className='text-white text-lg'>اندروید</div>
      </div>
    </div>
  );
};

export default Hero;
