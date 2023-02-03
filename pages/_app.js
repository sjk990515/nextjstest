import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>테스트입니다</title>
      </Head>
      <div>
        <h2>Navigation</h2>
        <div
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </div>
        <div
          onClick={() => {
            router.push("/profile");
          }}
        >
          Profile
        </div>
      </div>
      <Component {...pageProps} />
      <h2>footer</h2>
    </div>
  );
}
