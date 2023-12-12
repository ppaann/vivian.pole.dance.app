import React from "react";
import { Vidaloka } from "@next/font/google";
import Image from "next/image";

// import heroImg from "../public/assets/hero.png";
import heroBg from "../public/assets/hero_bg.png";
import heroImg from "../public/assets/hero_body.png";

import { motion, useScroll, useTransform } from "framer-motion";

const vidaloka = Vidaloka({
  subsets: ["latin"],
  weight: ["400"],
});

function Header() {
  const { scrollY } = useScroll();
  const imgScrollY = useTransform(scrollY, [0, 300], [0, -300]);
  const imgOpacity = useTransform(scrollY, [0, 1000], [1, 0]);
  const textScale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const textX = useTransform(scrollY, [1, 300], ["0", "-50%"]);
  return (
    <header className={vidaloka.className}>
      <div className="aspect-w-16 aspect-h-9 w-full relative">
        <Image fill src={heroBg} absolute alt="bg" />
        <motion.div
          style={{ opacity: imgOpacity, y: imgScrollY }}
          className="absolute h-screen w-screen"
        >
          <Image
            src={heroImg}
            alt="picture of Vivian dance"
            quality={100}
            fill
            placeholder="blur"
            style={{ objectFit: "cover", right: "10px" }}
          />
        </motion.div>

        <div
          className="container mx-auto h-screen
         w-full relative"
        >
          <h1 className="pt-8 pl-4">Vivian</h1>
          <motion.h1
            style={{ scale: textScale, x: textX }}
            className="absolute top-3/4 right-4 pl-24"
          >
            Pole <br />
            <span>Dancing</span>
          </motion.h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
