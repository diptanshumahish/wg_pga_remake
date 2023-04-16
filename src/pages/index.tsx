import { WelcomeWrapper } from "@/components";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Warriors&apos;s Group | Work</title>
      </Head>
      <div
        className="h-screen w-screen flex  flex-col  items-center justify-center"
        style={{
          backgroundImage: "url(/assets/aa.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <WelcomeWrapper />

        <div
          className="absolute bottom-0 right-0 text-white p-2"
          style={{ letterSpacing: "0.2rem" }}
        >
          &copy; Warrior&apos;s group LLC 2023
        </div>
      </div>
    </>
  );
}
