import { cn } from "@/lib/utils"
import Link from "next/link"
import { ReactNode } from "react"

export type LinkProp = {
    children: ReactNode,
    className?: string
}

export function CustomLink({ children, className }: LinkProp) {
    return <Link className={cn("hover:bg-neutral-600 hover:text-white font-semibold text-xs text-neutral-500 px-3 py-2 rounded-lg", className)} href="/">{children}</Link>
}