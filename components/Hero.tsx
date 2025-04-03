"use client"

import Link from "next/link"
import { ArrowRight, Edit, Heart, MessageCircle, Repeat2, Settings, Share2, Sparkles, Twitter, User, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {
  return (
    <div className="flex max-w-7xl mx-auto min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary-glow)),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--secondary-glow)),transparent_40%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center gap-2 text-2xl font-light tracking-wider">
                <Sparkles className="h-6 w-6 text-yellow-300" />
                <span>
                  SNIP<span className="font-bold">AI</span>
                </span>
              </div>
            </div>
            <h1 className="mb-6 text-4xl text-zinc-900 dark:text-zinc-100 md:text-5xl lg:text-6xl font-light">
              Transform Ideas into <span className="font-semibold">Impactful</span> Social Media Posts
            </h1>
            <p className="mb-10 text-[15px] md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 font-light">
              Generate engaging LinkedIn and Twitter content effortlessly with SnipAI.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up-delay-2">
              <Button asChild size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 sm:w-auto">
                <Link href="/dashboard">
                  Try It Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-16 max-w-xl rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm shadow-lg animate-fade-in-delay">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300/10">
                  <Twitter className="h-5 w-5 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Twitter Post</h3>
                  <p className="text-xs text-muted-foreground">Preview</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="rounded-lg bg-card p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-yellow-300/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-yellow-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Snip AI</span>
                    <span className="text-sm text-muted-foreground">@snipai</span>
                  </div>
                  <div className="mt-2">
                    <TypewriterEffect text="Excited to announce our latest AI breakthrough! 🚀 We've developed a new algorithm that improves content generation by 73%. This means faster, more accurate results for all our users. #AIInnovation #TechAdvancement" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-xs">24</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                      <Repeat2 className="h-4 w-4" />
                      <span className="text-xs">142</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span className="text-xs">358</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/20 dark:bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/20 dark:bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10">
          <h2 className="mb-4 text-center text-4xl font-light md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 dark:from-amber-200 dark:via-amber-400 dark:to-amber-200">
            Unique Features
          </h2>
          <p className="text-center text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Elevate your social media presence with our powerful AI-driven tools
          </p>
          <div className="mx-auto mb-20 max-w-md h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent dark:via-amber-500"></div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-yellow-400 dark:text-amber-400" />}
              title="AI-Powered Writing"
              description="Automated content creation with a human touch that captures your brand's voice perfectly."
            />
            <FeatureCard
              icon={<Twitter className="h-8 w-8 text-yellow-400 dark:text-amber-400" />}
              title="Platform-Specific Optimization"
              description="Tailored outputs specifically optimized for LinkedIn and Twitter algorithms."
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8 text-yellow-400 dark:text-amber-400" />}
              title="Custom Style and Length"
              description="Personalize content to match your brand's voice with adjustable tone and length."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-yellow-400 dark:text-amber-400" />}
              title="Instant Post Generation"
              description="Get professional, engaging posts in seconds with our lightning-fast AI engine."
            />
          </div>
        </motion.div>
      </section>
      <section id="how-it-works" className="relative py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-light md:text-4xl">How It Works</h2>
          <div className="mx-auto mb-16 max-w-md h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

          <div className="relative mx-auto max-w-4xl">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-zinc-800 md:left-[80px] md:translate-x-0"></div>

            <div className="space-y-20">
              <StepCard
                number="01"
                title="Type Your Topic"
                description="Enter the main topic or subject you want to create content about."
                icon={<Edit className="h-5 w-5" />}
              />
              <StepCard
                number="02"
                title="Select Style and Length"
                description="Choose the desired style, tone, and word count for your post."
                icon={<Settings className="h-5 w-5" />}
              />
              <StepCard
                number="03"
                title="Generate Your Post"
                description="Instantly receive a well-crafted social media post ready to publish."
                icon={<Sparkles className="h-5 w-5" />}
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="feature-card dark:border-zinc-800 border-zinc-300 bg-white dark:bg-black backdrop-blur-sm transition-all duration-500 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-900/20 hover:-translate-y-1 group">
      <CardContent className="p-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border dark:border-zinc-800 border-zinc-300 group-hover:border-amber-700 transition-all duration-300 group-hover:from-black group-hover:to-zinc-900">
          <div className="transform transition-transform duration-500 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <h3 className="mb-3 text-xl font-medium group-hover:text-amber-400 transition-colors duration-300">{title}</h3>
        <p className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-500 transition-colors duration-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function StepCard({
  number,
  title,
  description,
  icon,
}: { number: string; title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="step-card relative flex flex-col items-center md:flex-row md:items-start">
      <div className="z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 text-xl font-light text-amber-400 md:mr-12">
        {number}
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-amber-400">{icon}</div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <p className="text-zinc-700 dark:text-zinc-300">{description}</p>
      </div>
    </div>
  )
}

function TypewriterEffect({ text }: { text: string }) {
  return (
    <div className="typewriter">
      <p className="text-sm leading-relaxed">{text}</p>
      <style jsx>{`
        .typewriter p {
          overflow: hidden;
          border-right: 2px solid hsl(var(--primary));
          white-space: normal;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { max-width: 0 }
          to { max-width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: hsl(var(--primary)) }
        }
      `}</style>
    </div>
  )
}