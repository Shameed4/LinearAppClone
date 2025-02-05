import Image from "next/image";
import AnimatedText from "@/components/ui/animated";
import {CustomLink, LinkProp} from "@/components/ui/customLink"

const links = ["Product", "Resources", "Pricing", "Customers", "Blog", "Contact"]

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
        <AnimatedText />
        <h1 className="inline text-transparent">Hello</h1>
      </main>
    </div>
  );
}