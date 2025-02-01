import { Card, CardContent } from "@/components/ui/card"

export default function StepsToCreate() {
  return (
    <div className="container max-w-3xl mx-auto py-16 px-12 md:px-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <StepCard number={1} title="Type Your Topic" description="Enter the main topic or subject." />
        <StepCard number={2} title="Select Style and Length" description="Choose style and word count." />
        <StepCard number={3} title="Generate Your Post" description="Create your professional post." />
      </div>
    </div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <Card className="w-full md:w-[calc(33.333%-1rem)]">
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div className="bg-muted text-muted-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-2">
            {number}
          </div>
          <h2 className="text-sm font-medium">{title}</h2>
        </div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  )
}

