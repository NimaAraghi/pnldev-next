"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SwitchColor = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label='Toggle dark mode'
      className='relative cursor-pointer focus:outline-none'>
      {/* Switch indicator */}
      <span
        className={`absolute top-0 w-[25px] h-[25px] rounded-full background transition-all duration-300 ${
          isDark ? "left-1/2" : "left-0"
        }`}></span>
      <Image
        src='/images/dark-light-mode.png'
        alt='Dark/Light Mode'
        width={49}
        height={26}
      />
    </button>
  );
};

export default SwitchColor;
