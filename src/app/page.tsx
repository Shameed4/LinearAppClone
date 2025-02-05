import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const links = ["Product", "Resources", "Pricing", "Customers", "Blog", "Contact"]

type LinkProp = {
  children: ReactNode,
  className?: string
}

function CustomLink({ children, className }: LinkProp) {
  return <Link className={cn("hover:bg-neutral-600 hover:text-white font-semibold text-xs text-neutral-500 px-3 py-2 rounded-md", className)} href="/">{children}</Link>
}

export default function Home() {
  return (
    <div className="text-white" >
      <nav className="mb-16 border-b-[1px] border-b-neutral-900">
        <div className="max-w-5xl flex p-3 justify-between mx-auto my-15">
          <div>Linear</div>
          <div className="flex gap-2 justify-center">
            {links.map(link => <CustomLink key={link}>{link}</CustomLink>)}
          </div>
          <div>
            <CustomLink>Log in</CustomLink>
            <CustomLink className="bg-neutral-100 hover:bg-white text-black hover:text-black">Sign up</CustomLink>
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto">
        <h1 className="text-6xl text-neutral-200 font-medium">Linear is a purpose-built tool for planning and building products</h1>
        <div className="max-w-lg">
          <h3 className="text-xl my-10 font-medium text-neutral-300">Meet the system for modern software development. Streamline issues, projects, and product roadmaps.</h3>
          <CustomLink className="bg-neutral-200 hover:bg-white text-black hover:text-black text-sm font-semibold">Start building</CustomLink>
          <CustomLink className="inline-block ml-4 bg-black hover:bg-neutral-700"><p className="bg-gradient-to-r from-neutral-100 to-neutral-500 text-sm bg-clip-text text-transparent hover:text-transparent font-semibold">Introducing Customer Requests</p></CustomLink>
        </div>
        <h1 className="inline text-transparent">Hello</h1>
      </main>
    </div>
  );
}