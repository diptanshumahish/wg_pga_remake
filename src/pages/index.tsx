import { WelcomeWrapper, Clock } from "@/components";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Work @ WGLLC</title>
        <meta name="application-name" content="Warriors Group Work" />
        <meta
          name="description"
          content="The official work app for Warriors Group LLC"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Warriors Group LLC @work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div
          className="h-screen w-screen flex  flex-col  items-center justify-center"
          style={{
            backgroundImage: "url(/images/background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <WelcomeWrapper />
          <Clock />

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
