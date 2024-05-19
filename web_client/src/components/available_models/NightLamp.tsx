"use client";
import React from "react";
import {motion} from "framer-motion";
import {LampContainer} from "../ui/lamp";

export function NightLamp() {
  return (
    <LampContainer className="absolute -top-14 h-fit
    ">
      <motion.h1
        initial={{opacity: 0.5, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br/> the right way
      </motion.h1>
    </LampContainer>
  );
}
