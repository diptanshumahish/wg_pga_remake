import { getProdScore } from "@/functions/Admin/getProdScore";
import { useState } from "react";
import { DotLoader } from "react-spinners";

export default function ProductivityScore() {
  const [showData, setShowData] = useState(false);
  const initData: string[] = [];
  const init: number[] = [];
  const [emails, setEmails] = useState(initData);
  const [scores, setScores] = useState(init);
  return (
    <div
      className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[100%]"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="text-2xl font-bold">Productivity Score </div>
      {showData ? (
        <div className="w-[100%] flex flex-col gap-4 items-start">
          <button
            className="bg-inputBack w-fit p-1 px-2 rounded-sm text-white font-bold"
            onClick={() => {
              setShowData(false);
              getProdScore().then((value) => {
                setShowData(true);
                setEmails(value.emails);
                setScores(value.score);
              });
            }}
          >
            Update
          </button>
          <div className="flex flex-wrap gap-5">
            {emails.map((ele, idx) => {
              return (
                <div
                  className="transition-colors  flex flex-col justify-center items-center bg-white rounded-md overflow-hidden"
                  key={idx}
                >
                  <span className="p-2 px-4 bg-violet">{ele}</span>
                  <span className="p-2 text-2xl font-semibold text-slate-950 flex items-center gap-2">
                    {scores[idx]}{" "}
                    <span className="font-normal opacity-40 text-[20px]">
                      POINTS
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <button
            className="bg-inputBack w-fit p-1 px-2 rounded-sm text-white font-bold"
            onClick={() => {
              setShowData(true);
              getProdScore().then((value) => {
                setEmails(value.emails);
                setScores(value.score);
              });
            }}
          >
            Show Data
          </button>
          <DotLoader color="white" />
        </div>
      )}
    </div>
  );
}
