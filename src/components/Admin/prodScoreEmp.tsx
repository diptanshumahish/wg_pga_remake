import { getParticularEmployeeScore } from "@/functions/Admin/getScoreEmp";
import React, { useState } from "react";
import { DotLoader } from "react-spinners";

export default function ProdScoreEmp() {
  const [showData, setShowData] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Select Month");
  const [empEmail, setEmpEmail] = useState("set Email");
  const init: {
    id: number;
    date: number;
    value: string;
    month: string;
  }[] = [];
  const [dataArray, setDataArray] = useState(init);
  return (
    <div
      className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[100%]"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="text-2xl font-bold">
        Productivity Score of Particular Employee{" "}
      </div>
      <div className="flex justify-between">
        <span className="text-2xl font-bold">{selectedMonth}</span>
        <div className="flex items-center gap-4 w-[30%]">
          <select
            name="month"
            id=""
            className="bg-formBack p-2 pl-3 pr-3 shadow-md rounded-md text-[18px] cursor-pointer "
            onChange={(e) => {
              setSelectedMonth(e.target.value);
            }}
          >
            <option
              value="January"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              January
            </option>
            <option
              value="February"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              February
            </option>
            <option
              value="March"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              March
            </option>
            <option
              value="April"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              April
            </option>
            <option
              value="May"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              May
            </option>
            <option
              value="June"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              June
            </option>
            <option
              value="July"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              July
            </option>
            <option
              value="August"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              August
            </option>
            <option
              value="September"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              September
            </option>
            <option
              value="October"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              October
            </option>
            <option
              value="November"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              November
            </option>
            <option
              value="December"
              className="bg-formBack hover:bg-primary text-slate-950 cursor-pointer p-1"
            >
              December
            </option>
          </select>
          <input
            type="text"
            className="bg-formBack p-2 rounded-md shadow-md w-[100%]"
            placeholder="Enter employee email "
            onChange={(e) => {
              setEmpEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        {showData ? (
          <div>
            <button
              className="bg-inputBack w-fit p-1 px-2 rounded-sm text-white font-bold"
              onClick={() => {
                setShowData(false);
                getParticularEmployeeScore(empEmail, selectedMonth).then(
                  (val) => {
                    setShowData(true);
                    setDataArray(val!);
                  }
                );
              }}
            >
              Update
            </button>
            <div className="flex flex-wrap gap-4 py-5">
              {dataArray.map((ele, idx) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center bg-white  rounded-md overflow-hidden"
                    key={idx}
                  >
                    <span className="bg-red w-[100%] py-2 px-5 flex items-center justify-center font-bold text-xl">
                      {ele.date}
                    </span>
                    <span className="text-2xl text-slate-950 py-2 px-5 font-bold flex flex-col justify-center items-center">
                      <span>{ele.value}</span>
                      <span className="font-normal text-xs">POINTS</span>
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
                getParticularEmployeeScore(empEmail, selectedMonth).then(
                  (val) => {
                    setDataArray(val!);
                  }
                );
              }}
            >
              Show Data
            </button>
            <DotLoader color="white" />
          </div>
        )}
      </div>
    </div>
  );
}
