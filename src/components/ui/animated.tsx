"use client";

import { motion } from "framer-motion";
import { CustomLink } from "./customLink";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const parentProps = {
    initial: "hidden",
    animate: "visible",
    variants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, duration: 0.6 },
        },
    },
};

const childProps = {
    variants: {
        hidden: { opacity: 0, filter: "blur(20px)" },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { filter: { duration: 0.6 }, opacity: { duration: 0.6 } },
        },
    },
};

export default function AnimatedText() {
    const words = "Linear is a purpose-built tool for planning and building products".split(" ");
    const [first, setFirst] = useState(false);

    return (
        <div>
            <motion.div
                className="text-6xl text-neutral-200 font-medium flex flex-wrap gap-4"
                {...parentProps}
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        className="blur-sm"
                        onAnimationStart={() => {
                            if (index === words.length - 1) {
                                setTimeout(() => setFirst(true), 500)
                            };
                        }}
                        {...childProps}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
            {first && (
                <motion.div className="flex items-center gap-4 mt-10" {...parentProps}>
                    <motion.div {...childProps}>
                        <CustomLink className="bg-neutral-200 hover:bg-white text-black hover:text-black text-sm font-semibold flex items-center">
                            Start building
                        </CustomLink>
                    </motion.div>
                    <motion.div {...childProps}>
                        <CustomLink className="bg-black hover:bg-neutral-700 inline-flex items-center">
                            <p className="bg-gradient-to-r from-neutral-100 to-neutral-500 text-sm bg-clip-text text-transparent hover:text-transparent font-semibold flex items-center">
                                Introducing Customer Requests
                                <ChevronRight size={16} className="inline text-neutral-500 group-hover:text-neutral-100" />
                            </p>
                        </CustomLink>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
