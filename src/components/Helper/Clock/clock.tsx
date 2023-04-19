import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";

export default function Clock() {
  const [time, SetTime] = useState(moment(moment.now()).format("hh:mm A"));
  const [date, setDate] = useState(
    moment(moment.now()).format("DD MMMM YYYY ")
  );
  useEffect(() => {
    init;
    return () => {
      clearInterval(init);
    };
  });

  const init = setInterval(() => {
    SetTime(moment(moment.now()).format("hh:mm A"));
  }, 60000);

  return (
    <div className="absolute top-0 p-8 left-0 flex flex-col items-start">
      <div className="text-white text-4xl font-bold">{time}</div>
      <div className="text-white text-2xl ">{date}</div>
    </div>
  );
}
