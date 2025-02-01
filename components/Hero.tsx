import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-8 md:pt-20'>
      <div
        className="max-w-[88rem] mx-auto px-4 py-4 flex flex-col gap-4 items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="tracking-tighter max-w-[40rem] text-4xl lg:text-6xl text-center font-bold">
            Creating your content with AI.
          </h1>
        </div>
        <p className="text-primary/80 max-w-[34rem] text-center tracking-tight md:text-sm font-light">
          Create engaging and professional LinkedIn and Twitter posts effortlessly with SnipAI.
        </p>
        <div className='flex gap-4'>
          <Link href="/dashboard">
            <Button size="sm">
              Try it now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero