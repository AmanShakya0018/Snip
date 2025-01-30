"use client"
import { createContext, useState } from "react";
type PostContextType = {
  post: string;
  setPost: (post: string) => void;
};
export const PostContext = createContext<PostContextType | undefined>(undefined);
export default function PostProvider({ children }:
  { children: React.ReactNode }
) {
  const [post, setPost] = useState('');
  return <PostContext.Provider value={{ post, setPost }}>
    {children}
  </PostContext.Provider>;
};