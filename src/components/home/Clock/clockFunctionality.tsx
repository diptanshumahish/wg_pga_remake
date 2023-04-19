import { store } from "@/state-mangement/store/store/store";
import { Bug, BowlFood } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import moment from "moment";
import { updateTime } from "@/state-mangement/store/slices/countTime";
import { updateBreakEnable } from "@/state-mangement/store/slices/enableBreak";
export default function ClockFunctionality() {
  const [dur, setDur] = useState(store.getState().countTime);

  store.subscribe(() => {
    setDur(store.getState().countTime);
  });

  useEffect(() => {
    timer;
    return () => {
      clearInterval(timer);
    };
  }, []);

  const timer = setInterval(() => {
    var now: string = moment(moment.now()).format("HH:mm:ss");
    const temp: string | undefined = Cookie.get("firstLogin");
    const duration = moment
      .utc(moment(now, "HH:mm:ss").diff(moment(temp, "HH:mm:ss")))
      .subtract(store.getState().subtractBreak)
      .format("HH:mm");
    store.dispatch(updateTime(duration));
  }, 1000);

  return (
    <div
      className="right-0 top-0 rounded-md p-8 flex justify-between items-center "
      style={{
        minWidth: "100%",
        height: "30%",
        backgroundColor: "#2e106578",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className=" text-white flex flex-col">
        <span>Hours worked</span>
        <span className="text-8xl">{dur}</span>
        <span>Keep up the good work!</span>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-white p-3 rounded-sm shadow-md flex gap-2 justify-between items-center"
          onClick={() => {
            store.dispatch(updateBreakEnable());
          }}
        >
          Take a break <BowlFood size={19} />
        </button>
        <button
          onClick={() => {
            location.href =
              "mailto:diptanshumahish2016@gmail.com?subject=Bugs in Warriors Group LLC Work App&body=Hello, I found the following bugs in your app:";
          }}
          className="bg-red p-3 rounded-sm shadow-md flex gap-2 items-center justify-between text-white"
        >
          Report an issue <Bug size={19} />
        </button>
      </div>
    </div>
  );
}
