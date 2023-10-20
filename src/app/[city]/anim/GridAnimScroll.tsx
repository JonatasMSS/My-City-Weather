"use client";

import { Variants, motion } from "framer-motion";
import { Children, ReactNode } from "react";

export function GridAnimScroll({ children }: { children: ReactNode }) {
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
      className=" grid grid-flow-row grid-cols-4 items-center justify-center gap-20  "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={mainList}
    >
      {arrayFromChildren.map((value, i) => (
        <motion.div key={i} variants={item}>
          {value}
        </motion.div>
      ))}
    </motion.main>
  );
}
