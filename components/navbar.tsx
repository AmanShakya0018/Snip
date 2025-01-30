'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import UserAccountNav from './UserAccountNav';
import SignInButton from './SignInButton';
import { useSession } from 'next-auth/react';
import { navItems } from '@/constants';
import { Themetoggle } from './ThemeToggle';

const Navbar = () => {

  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#FDFDF9] dark:bg-[#060606] border-b dark:border-none border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            {/* add a .png file in public folder for website logo, sample png is used as example, design your own*/}
            <Image src="/logo.png" width={40} height={40} alt="Logo" unoptimized={true} className='rounded-xl' />
            <span className="text-xl font-bold">SnipAI</span>
          </Link>

          <div
            className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-neutral-500  hover:text-gray-900 relative dark:text-neutral-300 dark:hover:text-neutral-100">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Themetoggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
          </div>

          <div className="md:hidden flex items-center space-x-1">
            <Themetoggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div>
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block px-4 py-2 text-gray-900 hover:bg-neutral-100 dark:text-gray-100 dark:hover:bg-neutral-800 rounded-lg relative">
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;