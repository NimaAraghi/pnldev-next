import Image from "next/image";
import React from "react";
import Line from "./Line";
import Link from "next/link";

const Box = ({
  image,
  title,
  desc,
  toturial,
  refrence,
}: {
  image: string;
  title: string;
  desc: string;
  toturial: string;
  refrence?: string;
}) => {
  return (
    <div className='relative flex flex-col w-full p-[1%] bg-green-light-secondry'>
      <div className='absolute -top-5 right-[5%]'>
        <img
          className='h-16'
          src={`/images/${image}`}
          alt={`${title} language logo`}
        />
      </div>
      <div className='flex self-end'>
        <h2>{title}</h2>
        <Line />
      </div>
      <div>
        <p>{desc}</p>
      </div>
      <div className='absolute left-4 -bottom-3'>
        <Link href={`/toturial/${toturial}`}>آموزش</Link>
        {refrence && <Link href={`/refrence/${refrence}`}>مرجع</Link>}
      </div>
    </div>
  );
};

export default Box;
