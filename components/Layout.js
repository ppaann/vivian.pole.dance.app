import Footer from "./Footer";
import Header from "./Header";
import { Roboto } from "@next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-roboto",
});

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={roboto.className}>{children}</main>
      <Footer className={roboto.className} />
    </>
  );
}
