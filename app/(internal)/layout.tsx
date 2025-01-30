import { cn } from "@/lib/utils";
import SideBar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("relative flex min-h-dvh flex-col max-w-full mx-auto")}>
      <div className="flex flex-row">
        <aside className="hidden md:sticky md:top-0 md:overflow-hidden md:block md:w-[6 0px] md:max-w-[6 0px] md:min-w-[6 0px] h-screen border-r border-neutral-200 dark:border-neutral-800">
          <div className="h-full w-full pr-2 py-2">
            <div className="h-full flex flex-col w-full gap-4 py-2">
              <SideBar />
            </div>
          </div>
        </aside>
        <main className="flex-1 px-6 max-w-5xl mx-auto">{children}</main>
      </div>
      <Toaster />
    </div>
  );
}