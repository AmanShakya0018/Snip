'use client';
import React from 'react';
import Link from 'next/link';
import UserAccountNav from './UserAccountNav';
import SignInButton from './SignInButton';
import { useSession } from 'next-auth/react';
import { Themetoggle } from './ThemeToggle';

const Navbar = () => {

  const { data: session } = useSession();

  return (
    <nav className="z-50 sticky top-0 w-full px-4 lg:px-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Snip.AI</span>
          </Link>
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
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;