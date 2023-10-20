"use client";

import { Variants, motion } from "framer-motion";
import { Children, ReactNode } from "react";

export function GridAnim({ children }: { children: ReactNode | JSX.Element }) {
  const arrayFromChildren = Children.toArray(children);

  const mainList: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        easings: ["easeIn,easeOut"],
        type: "spring",
        bounce: 0.25,
      },
    },
  };

  return (
    <motion.main
      className="grid grid-flow-row grid-cols-4 gap-5 py-10"
      initial="hidden"
      animate="visible"
      variants={mainList}
    >
      {arrayFromChildren.map((value, i) => (
        <motion.div
          className="flex min-w-[50%] items-center justify-center "
          key={i}
          variants={item}
        >
          {value}
        </motion.div>
      ))}
    </motion.main>
  );
}
