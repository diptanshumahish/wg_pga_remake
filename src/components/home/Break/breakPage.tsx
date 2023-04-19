import MainButton from "@/components/Buttons/mainButton";
import { updateBreakEnable } from "@/state-mangement/store/slices/enableBreak";
import subTractBreak, {
  updateBreak,
} from "@/state-mangement/store/slices/subTractBreak";
import { store } from "@/state-mangement/store/store/store";
import { BowlFood } from "@phosphor-icons/react";
import moment from "moment";
import { useState, useEffect } from "react";

interface Props {
  visibility: boolean;
}

export default function TakeBreak({ visibility }: Props) {
  const startTime = moment(moment.now()).format("HH:mm:ss");
  return (
    <div
      className="absolute top-0 right-0 bottom-0 left-0 z-10 "
      style={{
        display: visibility ? "flex" : "none",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        position: "absolute",
        backgroundColor: "#2e106578",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        className="bg-slate-900 rounded-lg flex-col flex items-center justify-center text-white"
        style={{ minWidth: "60vw", minHeight: "80vh" }}
      >
        <BowlFood size={100} />
        <div className="text-5xl">Enjoy Your Break!</div>
        <button
          className="m-4  p-2 bg-white text-slate-950 rounded-md"
          onClick={() => {
            var previousBreak = store.getState().subtractBreak;

            const endTime = moment(moment.now()).format("HH:mm:ss");
            const duration = moment
              .utc(
                moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))
              )
              .format("HH:mm");
            const durationParts = duration.split(":");
            var hrs =
              parseInt(durationParts[0]) +
              previousBreak.minutes / 60 +
              previousBreak.hours;
            var mins =
              parseInt(durationParts[1]) + (previousBreak.minutes % 60);
            if (mins > 60) {
              hrs = hrs + mins / 60;
              mins = mins % 60;
            }
            console.log(hrs);
            console.log(mins);
            store.dispatch(
              updateBreak({
                hours: Math.floor(hrs),
                minutes: Math.floor(mins),
              })
            );
            store.dispatch(updateBreakEnable());
            console.log(store.getState().subtractBreak);
          }}
        >
          I&apos;m ready to start again!
        </button>
      </div>
    </div>
  );
}
