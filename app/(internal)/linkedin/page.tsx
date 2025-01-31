"use client"
import LinkedinPost from '@/components/LinkedinPost';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const LinkedIN = () => {

  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  return (
    <div>
      <LinkedinPost />
    </div>
  )
}

export default LinkedIN