import { XCircle } from "@phosphor-icons/react";
import Head from "next/head";

export default function Error() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className="h-screen w-full flex justify-center flex-col items-center">
        <XCircle size={30} color="red" />
        <div className="text-2xl">Not a supported platform</div>
      </div>
    </>
  );
}
