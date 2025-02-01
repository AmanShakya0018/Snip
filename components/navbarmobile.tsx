'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Themetoggle } from './ThemeToggle';
import UserAccountNavMobile from './UserAccountNavMobile';


const MobileNavbar = () => {

  const { data: session } = useSession();


  return (
    <nav className="block md:hidden z-50 sticky top-0 w-full bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-xl border-b border-primary/10 px-4 lg:px-8
">
      <div className="max-w-[88rem] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center space-x-12'>
            <Link href="/" className="flex items-center">
              <Image
                width={500}
                height={500}
                src={"/logo.png"}
                alt="logo.png"
                quality={100}
                priority={true}
                className="w-14 h-14 mt-1 rounded-full object-cover flex-shrink-0"
              />
            </Link>
          </div>
          <div className="md:hidden flex items-center space-x-1">
            <Themetoggle />
            {session?.user &&
              <UserAccountNavMobile user={session.user} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;