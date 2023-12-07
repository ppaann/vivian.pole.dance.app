import styles from "./header.module.scss";
import { Vidaloka } from "@next/font/google";
import Image from "next/image";

import heroImg from "../public/assets/hero.png";

const vidaloka = Vidaloka({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vidaloka",
});

function Header() {
  return (
    <header>
      <div className={`${styles.hero} ${vidaloka.variable}`}>
        <Image
          src={heroImg}
          alt="picture of Vivian dance"
          quality={100}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles["brand-name-container"]}>
          <div className="container mx-auto">
            <h1 className="pt-8">
              Pole <br />
              <span>Dancing</span>
            </h1>
            <h1 className={styles["brand-name"]}>Vivian</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
