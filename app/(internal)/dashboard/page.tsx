"use client"
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Snowflake } from "lucide-react"
import { FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import usePost from '@/hooks/usePost'
import useResult from '@/hooks/useResult'

const Dashboard = () => {

  const { setPost } = usePost();
  const { setResult } = useResult();

  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  return (
    <div className='flex flex-col min-h-screen items-center justify-center pt-10'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image src={"/logo.png"} alt="logo" width={500} height={500} className='rounded-lg h-16 w-16 border' />
        <h2 className='text-black text-3xl font-semibold dark:text-white text-center max-w-2xl'>Explore Endless Possibilities with Snip&apos;s Multi-Talented AI Generators</h2>
        <p className="text-sm text-neutral-500 text-center max-w-xl">
          Transform your ideas into impactful posts with SnipAI—your ultimate tool for seamless content creation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full items-center justify-center px-4 py-10">
        <Link onClick={() => { setResult(''); setPost(''); }} href="/linkedin" className="block w-full">
          <Card className="h-72 bg-neutral-100 dark:bg-neutral-950">
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-ful">
                  <FaLinkedin className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight">LinkedIn Post Generator</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Create engaging LinkedIn posts effortlessly. Provide a short prompt, and let us generate your
                    professional post.
                  </p>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600">
                  <Snowflake className="mr-2 h-4 w-4" />
                  Generate
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link onClick={() => { setResult(''); setPost(''); }} href="/twitter" className="block w-full">
          <Card className="h-72 bg-neutral-100 dark:bg-neutral-950">
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full">
                  <FaTwitter className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight">Twitter Post Generator</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Craft impactful tweets with ease. Provide a short prompt, and we’ll help you create the perfect post to share with your audience.
                  </p>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 ">
                  <Snowflake className="mr-2 h-4 w-4" />
                  Generate
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
      <p className="h-[30px] flex items-center justify-center text-neutral-500 text-xs w-full mt-auto">© 2025 Snip.AI</p>
    </div>
  )
}

export default Dashboard