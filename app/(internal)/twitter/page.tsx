"use client"
import TwitterPost from '@/components/TwitterPost';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Twitter = () => {

  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  return (
    <div>
      <TwitterPost />
    </div>
  )
}

export default Twitter