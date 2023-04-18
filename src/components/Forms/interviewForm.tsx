import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";
import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import MainButton from "../Buttons/mainButton";

export default function Interview() {
  const [date, setDate] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [timing, setTiming] = useState("");
  const [round, setRound] = useState("");
  const [duration, setDuration] = useState("");
  const [support, setSupport] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState(
    store.getState().email
  );

  return (
    <div
      className="bg-slate-900 rounded-md shadow-lg p-4  text-white "
      id="scroll"
      style={{ minWidth: "50vw", maxHeight: "80vh", overflowY: "scroll" }}
    >
      <div className="p-2 flex flex-col">
        <span
          className="text-3xl font-bold flex items-center cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormNumber(0));
          }}
        >
          <CaretLeft />
          Interview
        </span>
      </div>
      <div className="flex flex-col p-4 gap-2">
        {/* date  */}
        <FormHeading title="Date" key={1} />
        <MainInput
          placeHolder="Enter date"
          type="date"
          setVarName={setDate}
          key={99}
        />
        {/* Candidate Name  */}
        <FormHeading title="Candidate Name" key={2} />
        <MainInput
          placeHolder="Enter candidate name"
          type="text"
          setVarName={setCandidateName}
          key={98}
        />
        {/* timing */}
        <FormHeading title="Timing" key={3} />
        <MainInput
          placeHolder="Timing"
          type="text"
          setVarName={setTiming}
          key={97}
        />
        {/* round */}
        <FormHeading title="Round" key={4} />
        <MainInput
          placeHolder="Round"
          type="text"
          setVarName={setRound}
          key={96}
        />
        {/* call duration */}
        <FormHeading title="Call duration" key={5} />
        <MainInput
          placeHolder="Enter call duration"
          type="text"
          setVarName={setDuration}
          key={95}
        />
        {/* support */}
        <FormHeading title="Support" key={6} />
        <MainInput
          placeHolder="Support"
          type="text"
          setVarName={setSupport}
          key={94}
        />

        {/* Feedback */}
        <FormHeading title="Feedback" key={2} />
        <MainInput
          placeHolder="Enter feedback"
          type="text"
          setVarName={setFeedback}
          key={90}
        />

        {/* your email  */}
        <FormHeading title="Your Email" key={40} />
        <MainInput
          placeHolder="Own email"
          value={currentUserEmail}
          type="text"
          setVarName={setCurrentUserEmail}
          key={196}
        />

        <MainButton
          mainContent="Submit"
          onActionChange={() => {
            store.dispatch(updateFormNumber(0));
          }}
        />
      </div>
    </div>
  );
}
