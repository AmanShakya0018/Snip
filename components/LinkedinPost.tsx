"use client"
import Image from "next/image";
import { useState, useRef } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IoIosHelpCircle } from "react-icons/io";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Textarea } from "./ui/textarea";
import Result from "./Result";
import usePost from "@/hooks/usePost";
import useResult from "@/hooks/useResult";
import useBehaviour from "@/hooks/useBehaviour";
import { FaArrowTurnUp } from "react-icons/fa6";
import { Spinner } from "./ui/spinner";
import PostGeneratorSteps from "./PostGeneratorSteps";
import { useSession } from "next-auth/react";


export default function LinkedinPost() {
  const { post, setPost } = usePost();
  const { result, setResult } = useResult();
  const { behaviour, setBehaviour } = useBehaviour();
  const [words, setWords] = useState("50-100");
  const [isGenerating, setIsGenerating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const { data: session } = useSession();

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      const response = await axios.post('/api/linkedin/generate', { post, behaviour, words });
      setResult(response.data.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <main className="flex flex-col space-y-8 pt-10">
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image src={"/logo.png"} alt="logo" width={500} height={500} className='rounded-lg h-16 w-16 border' />
        <h2 className="text-black text-3xl font-semibold dark:text-white text-center max-w-3xl">
          {`Hi, ${session ? session.user?.name : "Guest"}`}
        </h2>
        <p className="text-sm text-neutral-500 max-w-lg text-center">
          Create engaging and professional LinkedIn posts effortlessly with SnipAI, your smart AI-powered writing assistant.
        </p>
      </div>
      <div className="w-full relative p-2 bg-neutral-100 dark:bg-neutral-900 rounded-md border border-neutral-300 dark:border-neutral-700 flex flex-col items-center justify-center dark:shadow-none shadow mt-10">
        <Textarea
          ref={textareaRef}
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
            adjustTextareaHeight();
          }}
          placeholder="Type your post details..."
          className="h-fit text-white w-full bg-transparent focus:outline-none focus:border-none max-h-[300px]"
          rows={1}
        />
        <div className="flex justify-between items-end w-full gap-3 mt-6">
          <div className="flex justify-between items-center gap-3">
            <div className="flex gap-3">
              <div>
                <Select onValueChange={(value: string) => {
                  setBehaviour(value);
                }}>
                  <SelectTrigger className="w-[110px] h-[34px] hover:bg-white/10 transition-all duration-300 text-xs bg-transparent rounded-lg before:bg-opacity-90 border border-neutral-300 dark:border-neutral-700 text-black dark:text-white p-2 truncate">
                    <SelectValue placeholder="Formal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Formal">Formal</SelectItem>
                    <SelectItem value="Inspirational">Inspirational</SelectItem>
                    <SelectItem value="Casual">Casual</SelectItem>
                    <SelectItem value="Friendly">Friendly</SelectItem>
                    <SelectItem value="Humorous">Humorous</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <Select onValueChange={(value: string) => {
                  setWords(value);
                }}>
                  <SelectTrigger className="w-[120px] h-[34px] hover:bg-white/10 transition-all duration-300 text-xs bg-transparent rounded-lg before:bg-opacity-90 backdrop-blur-lg border border-neutral-300 dark:border-neutral-700 text-black dark:text-white p-2 truncate">
                    <SelectValue placeholder="50-100 words" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100 words</SelectItem>
                    <SelectItem value="100-200">100-200 words</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IoIosHelpCircle className="h-4 w-4 text-neutral-500" />
                  </TooltipTrigger>
                  <TooltipContent side="right"
                    align="start"
                    className="bg-zinc-100 dark:bg-zinc-800 border-none">
                    <p className="text-xs text-neutral-500">Enter relevant text to get the best results</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div>
            <button
              className={`bg-transparent rounded-lg before:bg-opacity-5 hover:bg-white/10 border border-neutral-300 dark:border-neutral-700 text-black dark:text-white p-2 transition-all duration-300 ${!post ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handleGenerate}
              disabled={!post}
            >
              {isGenerating ? <Spinner size={"small"} /> : <FaArrowTurnUp className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
      {result ? (
        <Result />
      ) : (
        <PostGeneratorSteps />
      )}
    </main >
  )
}