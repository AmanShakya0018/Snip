'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Themetoggle } from './ThemeToggle';
import UserAccountNav from './UserAccountNav';
import SignInButton from './SignInButton';


const Navbar = () => {

  const { data: session } = useSession();

  return (
    <nav className="z-50 sticky top-0 w-full bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-b border-primary/10 px-4 lg:px-8
">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center space-x-12'>
            <Link href="/" className="flex items-center">
              <Image
                width={500}
                height={500}
                src={"/logo.png"}
                alt="talko"
                quality={100}
                priority={true}
                className="w-16 h-16 rounded mt-1 object-cover flex-shrink-0"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-1">
            <Themetoggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;