"use client"
import usePost from "@/hooks/usePost";
import useResult from "@/hooks/useResult";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function AnchorMobileNav({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  children,
  ...props
}: AnchorProps) {

  const { setPost } = usePost();
  const { setResult } = useResult();
  const path = usePathname();
  const isMatch = absolute
    ? props.href.toString().split("/")[1] == path.split("/")[1]
    : path === props.href;

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  return (
    <Link onClick={() => { setResult(''); setPost(''); }} className={cn(className, isMatch && activeClassName, "text-zinc-400 text-sm flex w-fit items-center rounded-md border border-transparent px-2 py-1 hover:text-black dark:hover:text-white transition duration-200")} {...props}>
      {children}
    </Link>
  );
}