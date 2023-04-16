import { MainButton } from "@/components";
import Image from "next/image";
export default function HelloScreen() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-slate-950 bg-opacity-20 p-10 rounded-md shadow-md gap-4"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <span className="text-white">Welcome</span>
        <Image
          className="rounded-full"
          src="/assets/def.png"
          height={50}
          width={50}
          alt="User avatar"
        />
        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-bold">Ryan Smith</span>
          <span className="text-xs text-white">(Login time: 10:51 PM)</span>
        </div>
        <MainButton mainContent="Let's Start" onActionChange={() => {}} />
      </div>
    </>
  );
}
