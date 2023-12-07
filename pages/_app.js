import Layout from "../components/Layout";
import Head from "next/head";

import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-roboto",
});
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pole Dancer Vivian</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Vivian, professional pole dance trainer's website"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
