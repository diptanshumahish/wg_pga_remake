import { getParticularEmployeeData } from "@/functions/Admin/getParticularEmployeeData";
import { useState } from "react";
import { toast } from "react-toastify";
import Drop from "../components/ui/Drop";

export default function EmployeeProductionHours() {
  const [selectedMonth, setSelectedMonth] = useState("Select Month");
  const [empEmail, setEmpEmail] = useState("set Email");
  const [showData, setShowData] = useState(false);
  var initData: any = [];
  const [tableData, setTableData] = useState(initData);
  return (
    <div
      className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[100%]"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="text-2xl font-bold">Employee Production Hours</div>
      <div className="flex justify-between">
        <span className="text-2xl font-bold">{selectedMonth}</span>
        <div className="flex items-center gap-4 w-[30%]">
          <select
            name="month"
            id=""
            className="bg-formBack p-2 pl-3 pr-3 shadow-md rounded-md text-sm cursor-pointer "
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
          <Drop
            onC={(val: string) => {
              setShowData(false);
              setEmpEmail(val);
            }}
          />
        </div>
      </div>
      <div>
        {showData ? (
          <>
            <button
              className="bg-inputBack w-fit p-1 px-2 rounded-sm text-white font-bold"
              onClick={() => {
                setEmpEmail("");
                setTableData([]);
                setShowData(true);
                getParticularEmployeeData(empEmail, selectedMonth).then(
                  (value) => {
                    if (value?.length === 0) {
                      toast.warn(
                        "Check whether you have entered correct data",
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
                    } else {
                      setTableData(value);
                    }
                  }
                );
                getParticularEmployeeData(empEmail, selectedMonth).then(
                  (value) => {
                    if (value?.length === 0) {
                      toast.warn(
                        "Check whether you have entered correct data",
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
                    } else {
                      setTableData(value);
                    }
                  }
                );
              }}
            >
              Update
            </button>

            <div className="flex flex-wrap gap-4">
              {tableData.map(
                (
                  ele: {
                    id: number;
                    date: number;
                    value: string;
                    month: string;
                  },
                  idx: number
                ) => {
                  return (
                    <div
                      className="flex mt-6 flex-col items-center justify-center bg-white  rounded-md overflow-hidden"
                      key={idx}
                    >
                      <span className="bg-red w-[100%] py-2 px-5 flex items-center justify-center font-bold text-xl">
                        {ele.date}
                      </span>
                      <span className="text-2xl text-slate-950 py-2 px-5 font-bold flex flex-col justify-center items-center">
                        <span>{ele.value}</span>
                        <span className="font-normal text-xs">HOURS</span>
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </>
        ) : (
          <button
            className="bg-inputBack w-fit p-1 px-2 rounded-sm text-white font-bold"
            onClick={() => {
              setShowData(true);

              getParticularEmployeeData(empEmail, selectedMonth).then(
                (value) => {
                  if (value?.length === 0) {
                    toast.warn("Check whether you have entered correct data", {
                      position: "top-right",
                      autoClose: 9000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  } else {
                    setTableData(value);
                  }
                }
              );
              getParticularEmployeeData(empEmail, selectedMonth).then(
                (value) => {
                  if (value?.length === 0) {
                    toast.warn("Check whether you have entered correct data", {
                      position: "top-right",
                      autoClose: 9000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  } else {
                    setTableData(value);
                  }
                }
              );
            }}
          >
            Show Data
          </button>
        )}
      </div>
    </div>
  );
}
