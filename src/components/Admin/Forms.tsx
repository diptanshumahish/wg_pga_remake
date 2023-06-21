import { useEffect, useState } from "react";
import { getFormdata, getTableColumns } from "@/functions";
import { DotLoader } from "react-spinners";
import { CSVLink, CSVDownload } from "react-csv";
import { DatTable } from "../components/ui/DatTable";

export default function Forms() {
  const forms = [
    "Candidates",
    "Clients",
    "Feedback",
    "Interviews",
    "Recruiting",
    "Submissions",
    "Missing Rate",
  ];
  const dbReq = [
    "candidates",
    "clients",
    "Feedback",
    "interviews",
    "recruiting",
    "submissions",
    "missingRate",
  ];
  const search: string[] = [
    "Name",
    "Name",
    "Name",
    "CandidateName",
    "Name",
    "Name",
    "Name",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const initData: any[] = [];
  const [dataArray, setDataArray] = useState(initData);
  const [columnsData, setColumnsData] = useState(initData);
  useEffect(() => {
    setDataArray([]);
  }, []);

  return (
    <div
      className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[100%]"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="text-2xl font-bold">Form Submissions</div>
      <div className=" flex gap-4 w-fit  ">
        {forms.map((ele, idx) => {
          if (idx === activeIndex) {
            return (
              <span
                key={idx}
                className="cursor-pointer border-b-2"
                onClick={() => {
                  setActiveIndex(idx);
                  setDataArray([]);
                  getFormdata(dbReq[idx]).then((value) => {
                    setDataArray(value);
                  });
                }}
              >
                {ele}
              </span>
            );
          }
          return (
            <span
              key={idx}
              className="cursor-pointer text-unselectedText hover:text-white"
              onClick={() => {
                setActiveIndex(idx);
                setDataArray([]);
                getFormdata(dbReq[idx]).then((value) => {
                  setDataArray(value);
                });
                setColumnsData(getTableColumns(idx));
              }}
            >
              {ele}
            </span>
          );
        })}
      </div>
      <CSVLink
        className="bg-inputBack w-fit p-1 px-2 rounded-sm text-white font-bold"
        data={dataArray}
        filename={`${forms[activeIndex]}_${Date.now()}`}
      >
        Download CSV
      </CSVLink>
      {dataArray.length === 0 ? (
        <div className="w-[100%] flex flex-col justify-center items-center p-8">
          <DotLoader color="white" />
          <div>Loading</div>
        </div>
      ) : (
        // <DataTable columns={columnsData} data={dataArray} pagination  />
        <DatTable
          columns={columnsData}
          data={dataArray}
          search={search[activeIndex]}
        />
      )}
    </div>
  );
}
