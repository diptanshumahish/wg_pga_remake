import Image from "next/image";
import { store } from "@/state-mangement/store/store/store";
import { MainButton } from "@/components";
import { goFront } from "@/state-mangement/store/slices/changeScreenSlice";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { newDay } from "@/functions";
import { toast } from "react-toastify";
import moment from "moment";
import { setDoc, doc, getFirestore } from "firebase/firestore";

export default function Welcome() {
  const db = getFirestore();
  const em = store.getState().email;
  useEffect(() => {
    if (Cookies.get("updateDate") === "updated" && !newDay()) {
      toast.warn(
        "you have already updated your work data today, make sure you have proper reasons to login fresh again",
        {
          position: "top-right",
          autoClose: 9000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
    if (
      newDay() &&
      Cookies.get("updateDate") !== "updated" &&
      Cookies.get("updateDate") !== null &&
      Cookies.get("updateDate") !== undefined
    ) {
      setDoc(
        doc(db, "workHour", em),
        {
          [`${Cookies.get("updateDate")}`]: store.getState().countTime,
        },
        { merge: true }
      ).then(() => {
        Cookies.set("updateDate", moment(moment.now()).format("DD/MMMM/YYYY"));
        toast.success(
          "We have sucessfully updated last your last day work hours",
          {
            position: "top-right",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      });
    }
  }, []);
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
