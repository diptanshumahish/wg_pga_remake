import { getParticularEmployeeData } from "@/functions/Admin/getParticularEmployeeData";
import { Divide } from "@phosphor-icons/react";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import DataTable from "react-data-table-component";

export default function EmployeeProductionHours() {
  const [selectedMonth, setSelectedMonth] = useState("Select Month");
  const [empEmail, setEmpEmail] = useState("set Email");
  const [showData, setShowData] = useState(false);
  var initData: DocumentData = [];
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
          <>
            <button
              className="m-2 bg-formBack p-2"
              onClick={() => {
                setShowData(true);
                getParticularEmployeeData(empEmail, selectedMonth).then(
                  (value) => {
                    setTableData(value);
                  }
                );
              }}
            >
              Update
            </button>
            <DataTable
              columns={[
                {
                  name: "date",
                  selector: (row) => row.date,
                  style: {
                    backgroundColor: "rgba(63, 195, 128, 0.9)",
                    color: "white",
                  },
                  sortable: true,
                },
                {
                  name: "Hours",
                  selector: (row) => row.value,
                },
              ]}
              data={tableData}
              pagination
              className="rounded-md"
            />
          </>
        ) : (
          <button
            onClick={() => {
              setShowData(true);
              getParticularEmployeeData(empEmail, selectedMonth).then(
                (value) => {
                  setTableData(value);
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
