import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";
import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import MainButton from "../Buttons/mainButton";

export default function FeedBackForm() {
  const [fullName, setFullName] = useState("");
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
          Feedback
        </span>
        <div className="flex flex-col p-4 gap-2">
          {/* full name  */}
          <FormHeading title="Full Name" key={1} />
          <MainInput
            placeHolder="Enter full name"
            type="text"
            setVarName={setFullName}
            key={99}
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
    </div>
  );
}
