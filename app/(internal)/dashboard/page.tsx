"use client"
import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Snowflake } from "lucide-react"
import { FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {

  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  return (
    <div className='flex items-center justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full items-center justify-center px-4 py-10">
        <Link href={"/linkedin"} className='w-full max-w-full rounded-lg border'>
          <Card className='bg-neutral-100 dark:bg-neutral-950'>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-lg shadow-sm">
                  <FaLinkedin className="h-10 w-10" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight">LinkedIn Post Generator</h2>
                  <p className="text-sm text-muted-foreground">
                    Create engaging LinkedIn posts effortlessly. Provide a short prompt, and let us generate your professional post.
                  </p>
                </div>

                <div className="flex w-full flex-col space-y-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Button className="ml-auto bg-green-500 hover:bg-green-600">
                      <Snowflake className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href={"/twitter"} className='w-full max-w-full rounded-lg border'>
          <Card className='bg-neutral-100 dark:bg-neutral-950'>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-lg shadow-sm">
                  <FaTwitter className="h-10 w-10" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight">Twitter Post Generator</h2>
                  <p className="text-sm text-muted-foreground">
                    Craft impactful tweets with ease. Provide a short prompt, and we’ll help you create the perfect post to share with your audience.
                  </p>
                </div>

                <div className="flex w-full flex-col space-y-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Button className="ml-auto bg-green-500 hover:bg-green-600">
                      <Snowflake className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard