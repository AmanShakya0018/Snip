"use client"
import React from 'react';
import AnchorSidebar from './anchor-sidebar';
import Image from 'next/image';
import UserAccountSidebar from './UserAccountSidebar';
import { useSession } from 'next-auth/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { MdDashboard } from "react-icons/md";
import Link from 'next/link';

const primaryItems = [
  { icon: <MdDashboard className='h-6 w-6' />, href: '/dashboard' },
  { icon: <FaLinkedin className='h-6 w-6' />, href: '/linkedin' },
  { icon: <FaTwitter className='h-6 w-6' />, href: '/twitter' },
];

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col justify-between items-center min-h-[95vh]'>
      <div>
        <Link href={"/"}>
          <Image src="/logo.png" alt='logo' width={500} height={500} className='rounded-xl h-12 w-12' />
        </Link>
      </div>
      <div className='space-y-4'>
        {primaryItems.map((item) => (
          <AnchorSidebar
            key={item.href}
            activeClassName="text-black dark:text-white font-medium"
            absolute
            href={item.href}
          >
            {item.icon}
          </AnchorSidebar>
        ))}
      </div>
      <div>
        {session?.user &&
          <UserAccountSidebar user={session.user} />
        }
      </div>
    </div>

  );
};

export default Sidebar;