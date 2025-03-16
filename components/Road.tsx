import React from "react";

const Road = () => {
  return (
    <div className='flex flex-col justify-between h-12 opacity-40'>
      <div className='w-full h-px bg-white' />
      <div
        style={{
          background:
            "repeating-linear-gradient(90deg, #fff 0, #FFF 30px, transparent 30px, transparent 60px)",
        }}
        className='w-full h-px'></div>
      <div className='w-full h-px bg-white' />
    </div>
  );
};

export default Road;
