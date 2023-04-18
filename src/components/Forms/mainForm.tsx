import { updateFormEnable } from "@/state-mangement/store/slices/formEnabe";
import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { store } from "@/state-mangement/store/store/store";
import {
  Table,
  CaretLeft,
  Book,
  Student,
  CalendarCheck,
  ThumbsUp,
  ReadCvLogo,
  UserSquare,
  Strategy,
} from "@phosphor-icons/react";

export default function MainForm() {
  return (
    <div
      className="bg-slate-900 rounded-md shadow-lg p-8  text-white overflow-y-scroll"
      style={{ width: "50vw", height: "80vh" }}
    >
      <div className="flex justify-between items-center text-2xl text-white ">
        <span
          className="flex items-center font-bold cursor-pointer "
          onClick={() => {
            store.dispatch(updateFormEnable());
          }}
        >
          <CaretLeft color="white" />
          Forms Selection
        </span>{" "}
        <Table size={25} />
      </div>
      <div className="flex p-4 flex-col gap-2">
        <div
          className="p-3 bg-white text-slate-950 hover:bg-violet hover:text-white  rounded-md flex justify-between items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(1));
          }}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold">Submissions</span>
            <span className="text-xs">Submissions data</span>
          </div>{" "}
          <Book size={25} />
        </div>
        {/* candidates  */}
        <div
          className="p-3 bg-white text-slate-950 hover:bg-violet hover:text-white  rounded-md flex justify-between items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(2));
          }}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold">Candidates</span>
            <span className="text-xs">Enter candidates data</span>
          </div>{" "}
          <Student size={25} />
        </div>
        {/* clients */}
        <div
          className="p-3 bg-white text-slate-950 hover:bg-violet hover:text-white   rounded-md flex justify-between items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(3));
          }}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold">Clients</span>
            <span className="text-xs">Enter clients</span>
          </div>{" "}
          <CalendarCheck size={25} />
        </div>
        {/* feedback */}
        <div
          className="p-3 bg-white text-slate-950 hover:bg-violet hover:text-white   rounded-md flex justify-between items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(4));
          }}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold">Feedback</span>
            <span className="text-xs">Feedback here</span>
          </div>{" "}
          <ThumbsUp size={25} />
        </div>

        {/* interview */}
        <div
          className="p-3 bg-white text-slate-950 hover:bg-violet hover:text-white   rounded-md flex justify-between items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(5));
          }}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold">Interview</span>
            <span className="text-xs">interview details</span>
          </div>{" "}
          <ReadCvLogo size={25} />
        </div>

        {/* Recruiter */}
        <div
          className="p-3 bg-white text-slate-950 hover:bg-violet hover:text-white   rounded-md flex justify-between items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(6));
          }}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold">Recruiter</span>
            <span className="text-xs">recruiter details</span>
          </div>{" "}
          <UserSquare size={25} />
        </div>

        {/* missing rate */}
        <div
          className="p-3 bg-white text-slate-950 hover:bg-violet hover:text-white   rounded-md flex justify-between items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(7));
          }}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold">Missing Rate</span>
            <span className="text-xs">Missing Rate details</span>
          </div>{" "}
          <Strategy size={25} />
        </div>
      </div>
    </div>
  );
}
