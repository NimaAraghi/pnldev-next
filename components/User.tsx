import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

const User = () => {
  const isLogedin = true;

  if (!isLogedin) {
    return (
      <Link href='/login-register'>
        <FontAwesomeIcon icon={faUser} className='size-5 text-white' />
      </Link>
    );
  } else {
    return (
      <DropdownMenu dir='rtl'>
        <DropdownMenuTrigger className='cursor-pointer'>
          <FontAwesomeIcon icon={faUser} className='size-5 text-white' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='background' align='end'>
          <DropdownMenuLabel className='text-xl text-center'>
            نیما عراقی
          </DropdownMenuLabel>
          <p className='text-xs text-center text-gray-400'>
            nims.844@gmail.com
          </p>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='py-1 '>
            <Link href='/admin/dashboard'>داشبورد ادمین</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='py-1 '>
            <Link href='/dashboard'>داشبورد</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='py-1 '>
            <Link href='/'>مسیر پیشفرت</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='py-1 '>خروج</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default User;
