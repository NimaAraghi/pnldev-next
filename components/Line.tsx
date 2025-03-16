import React from "react";

const Line = ({ title }: { title?: string }) => {
  return (
    <div className='flex justify-between items-center relative w-full my-12'>
      <div className='w-full h-px bg-black'>
        <div
          className={`absolute ${
            title ? "bottom-3.5" : "bottom-0"
          } left-[85%] size-9 bg-[url(/images/cactus.svg)] bg-no-repeat`}></div>
      </div>
      {title && (
        <div className='w-fit'>
          <div className='text-2xl mx-10 text-nowrap'>{title}</div>
        </div>
      )}
      <div className='w-full h-px bg-black'>
        <div
          className={`absolute ${
            title ? "bottom-3.5" : "bottom-0"
          } left-[5%] size-9 bg-[url(/images/trex.svg)] bg-no-repeat`}></div>
      </div>
    </div>
  );
};

export default Line;
