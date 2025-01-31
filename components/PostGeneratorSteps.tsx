import { Card, CardContent } from "@/components/ui/card"

export default function PostGeneratorSteps() {
  return (
    <div className="container mx-auto py-8 mt-10">
      <div className="grid gap-6 md:grid-cols-3">
        <StepCard
          number={1}
          title="Type Your Topic"
          description="Enter the main topic or subject of your requested post."
        />
        <StepCard
          number={2}
          title="Select Style and Length"
          description="Choose the writing style for your post and specify the number of words you want."
        />
        <StepCard
          number={3}
          title="Generate Your Post"
          description="Click to generate your professional post based on your specifications."
        />
      </div>
    </div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <Card className="relative md:mb-0 mb-4">
      <CardContent className="pt-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {number}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <p className="text-neutral-500 text-center text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

