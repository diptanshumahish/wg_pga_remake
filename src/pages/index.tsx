import { WelcomeWrapper, Clock } from "@/components";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Work @ Catchmflixx</title>
        <meta name="application-name" content="Catchmflixx-work" />
        <meta
          name="description"
          content="The official work app for Catchmflixx"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Catchmflixx @work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
		  closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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

        <div className="absolute bottom-0 right-0 text-white p-2 flex flex-col">
          &copy; Warrior&apos;s group LLC 2023
          <span className="text-right font-xs text-unselectedText">
            version 4.3
          </span>
        </div>
      </div>
    </>
  );
}
