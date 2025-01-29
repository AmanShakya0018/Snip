'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Themetoggle } from './ThemeToggle';


const Navbar = () => {

  return (
    <nav className="z-50 sticky top-0 w-full bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-b border-primary/10 px-4 lg:px-8
">
      <div className="max-w-[88rem] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center space-x-12'>
            <Link href="/" className="flex items-center space-x-1">
              <Image src="/logo.png" width={500} height={500} priority={false} alt="Logo" unoptimized={true} className="h-10 w-10" />
              <span className="text-2xl font-bold">LinkUp</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com/AmanShakya0018" target="_blank">
              <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">Twitter</p>
            </Link>
            <Link href="https://www.linkedin.com/in/amanshakya0018/" target="_blank">
              <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">LinkedIn</p>
            </Link>
            <Themetoggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;