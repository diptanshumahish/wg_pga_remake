import Image from "next/image";
import { store } from "@/state-mangement/store/store/store";
import { MainButton } from "@/components";
import { goFront } from "@/state-mangement/store/slices/changeScreenSlice";

export default function Welcome() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white bg-opacity-10 p-10 rounded-md shadow-md gap-4"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <Image src="/assets/load.png" height={200} width={300} alt="MainLogo" />
      <div className="flex flex-col">
        <span className="font-sans text-white font-bold text-3xl">
          Warriors&apos;s Group LLC
        </span>
        <span className="text-white font-sans text-center">Work</span>
      </div>
      <MainButton
        mainContent="Let's Go"
        onActionChange={() => {
          store.dispatch(goFront());
        }}
      />
    </div>
  );
}
