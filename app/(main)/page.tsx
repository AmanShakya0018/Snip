import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import StepsToCreate from "@/components/stepstocreate";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-6">
      <Navbar />
      <Hero />
      <StepsToCreate />
      <p className="h-[30px] flex items-center justify-center text-neutral-500 text-xs w-full mt-auto">© 2025 &nbsp;<Link href={"http://amanshakya.in"} target="_blank" className="underline">{" "}Snip.AI</Link></p>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    </div>
  );
}
