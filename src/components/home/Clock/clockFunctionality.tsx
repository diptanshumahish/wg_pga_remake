import { Bug, BowlFood } from "@phosphor-icons/react";
export default function ClockFunctionality() {
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
        <span className="text-8xl">01:23</span>
        <span>Keep up the good work!</span>
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-white p-3 rounded-sm shadow-md flex gap-2 justify-between items-center">
          Take a break <BowlFood size={19} />
        </button>
        <button
          onClick={() => {}}
          className="bg-red p-3 rounded-sm shadow-md flex gap-2 items-center justify-between text-white"
        >
          Report an issue <Bug size={19} />
        </button>
      </div>
    </div>
  );
}
