import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { MdDashboard } from "react-icons/md";
import AnchorMobileNav from './anchor-mobilenav'

const MobileNav = () => {

  return (
    <div className="md:hidden block h-10 sticky -bottom-1 border-t border-neutral-100 dark:border-white/[0.1] bg-white/50 dark:bg-black/50 shadow-lg shadow-neutral-600/5 backdrop-blur-xl">
      <div className="max-w-[80rem] mx-auto text-sm text-gray-400 flex flex-row justify-center gap-12 items-center ">
        <AnchorMobileNav
          key="dashboard"
          activeClassName="text-black dark:text-white font-medium"
          absolute
          href={"/dashboard"}
        >
          <MdDashboard className='h-6 w-6' />
        </AnchorMobileNav>
        <AnchorMobileNav
          key="linkedin"
          activeClassName="text-black dark:text-white font-medium"
          absolute
          href={"/linkedin"}
        >
          <FaLinkedin className='h-6 w-6' />
        </AnchorMobileNav>
        <AnchorMobileNav
          key="twitter"
          activeClassName="text-black dark:text-white font-medium"
          absolute
          href={"/twitter"}
        >
          <FaTwitter className='h-6 w-6' />
        </AnchorMobileNav>
      </div>
    </div>
  )
}

export default MobileNav
