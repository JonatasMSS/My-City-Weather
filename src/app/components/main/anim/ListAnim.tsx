"use client";

import { Variants, motion } from "framer-motion";
import { Children, ReactNode } from "react";

export function ListAnim({ children }: { children: ReactNode | JSX.Element }) {
  const arrayFromChildren = Children.toArray(children);

  const mainList: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item: Variants = {
    hidden: {
      y: -500,
    },
    visible: {
      y: 0,
      transition: {
        easings: ["easeIn,easeOut"],
        type: "spring",
        bounce: 0.25,
      },
    },
  };

  return (
    <motion.main
      className="flex w-full flex-col items-center  justify-center gap-20   py-10 transition-colors"
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
