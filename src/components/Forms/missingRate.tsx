import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";
import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import MainButton from "../Buttons/mainButton";

export default function MissingRate() {
  const [date, setDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [tech, setTechnology] = useState("");
  const [visa, setVisa] = useState("");
  const [relocation, setRelocation] = useState("");
  const [expRate, setExpRate] = useState("");
  const [clientRate, setClientRate] = useState("");
  const [recruiterMail, setRecMail] = useState("");
  const [recruiterNumber, setRecruiterNumber] = useState("");
  const [reqId, setReqId] = useState("");
  const [recruiterName, setRecruiterName] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState(
    store.getState().email
  );
  return (
    <div
      className="bg-slate-900 rounded-md shadow-lg p-4  text-white "
      id="scroll"
      style={{ minWidth: "50vw", maxHeight: "80vh", overflowY: "scroll" }}
    >
      <span
        className="text-3xl font-bold flex items-center cursor-pointer"
        onClick={() => {
          store.dispatch(updateFormNumber(0));
        }}
      >
        <CaretLeft />
        Missing Rate
      </span>
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
        <FormHeading title="Name" key={2} />
        <MainInput
          placeHolder="Enter  name"
          type="text"
          setVarName={setFullName}
          key={98}
        />
        {/* visa*/}
        <FormHeading title="Visa" key={3} />
        <MainInput
          placeHolder="Visa"
          type="text"
          setVarName={setVisa}
          key={97}
        />
        {/* Technology */}
        <FormHeading title="Technology" key={4} />
        <MainInput
          placeHolder="Technology"
          type="text"
          setVarName={setTechnology}
          key={96}
        />
        {/* Relocation */}
        <FormHeading title="Relocation" key={5} />
        <MainInput
          placeHolder="relocation"
          type="text"
          setVarName={setRelocation}
          key={95}
        />
        {/* expected rate */}
        <FormHeading title="Expected Rate" key={6} />
        <MainInput
          placeHolder="Expected rate"
          type="text"
          setVarName={setExpRate}
          key={94}
        />
        {/* Client Rate */}
        <FormHeading title="Client Rate" key={7} />
        <MainInput
          placeHolder="Client Rate"
          type="text"
          setVarName={setClientRate}
          key={93}
        />
        {/* Recruiter Mail */}
        <FormHeading title="Recruiter Mail" key={8} />
        <MainInput
          placeHolder="Recruiter Mail"
          type="text"
          setVarName={setRecMail}
          key={92}
        />
        {/* Recruiter Number */}
        <FormHeading title="Recruiter Number" key={9} />
        <MainInput
          placeHolder="Recruiter Number"
          type="text"
          setVarName={setRecruiterNumber}
          key={91}
        />
        {/* Req Id */}
        <FormHeading title="Req Id" key={10} />
        <MainInput
          placeHolder="Req Id"
          type="text"
          setVarName={setReqId}
          key={90}
        />
        {/* Recruiter name */}
        <FormHeading title="Recruiter name" key={11} />
        <MainInput
          placeHolder="Recruiter name"
          type="text"
          setVarName={setRecruiterName}
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
