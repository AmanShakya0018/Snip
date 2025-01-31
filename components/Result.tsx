import { IoMdCopy } from "react-icons/io";
import { useState, useEffect } from "react";
import useResult from "@/hooks/useResult";
import { toast } from "@/hooks/use-toast";

export default function Result() {
  const { result } = useResult();
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const speed = 20;

  useEffect(() => {
    if (currentIndex < (result?.length || 0)) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + result[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, result, speed]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [result]);

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    toast({
      description: "Copied to clipboard",
    });
  };

  return (
    <div
      className={`flex flex-col gap-2 w-full mt-2 py-3 ${result ? "block" : "hidden"}`}
    >
      <div className="flex bg-neutral-100 dark:bg-neutral-900 backdrop-blur-lg overflow-hidden whitespace-pre-wrap rounded-lg border dark:md:shadow-xl">
        <div
          className="relative text-sm w-full py-4 pl-4 pr-2"
        >
          {displayedText}
        </div>
        <button
          onClick={copyToClipboard}
          className={`bg-transparent h-fit rounded-lg text-white pt-2 pr-2`}
        >
          <IoMdCopy className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
