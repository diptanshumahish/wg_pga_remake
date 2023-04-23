import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";
import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import MainButton from "../Buttons/mainButton";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";
import { updateScore } from "@/functions";
import moment from "moment";
import { Timestamp, doc, getFirestore, setDoc } from "firebase/firestore";

export default function Interview() {
  // animation
  const [showDotLoader, setShowDotLoader] = useState(false);

  const [date, setDate] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [timing, setTiming] = useState("");
  const [round, setRound] = useState("");
  const [duration, setDuration] = useState("");
  const [support, setSupport] = useState("");
  const [feedback, setFeedback] = useState("");
  const [technology, setTechnology] = useState("");
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
        {/* technology*/}
        <FormHeading title="Technology" key={8098} />
        <MainInput
          placeHolder="Technology"
          type="text"
          setVarName={setTechnology}
          key={98979}
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

        {showDotLoader ? (
          <div className="w-[100%] flex items-center justify-center ">
            <DotLoader color="white" />
          </div>
        ) : (
          <MainButton
            mainContent="Submit"
            onActionChange={() => {
              update().then(() => {
                store.dispatch(updateFormNumber(0));
              });
            }}
          />
        )}
      </div>
    </div>
  );

  async function update() {
    const mom = moment(moment.now()).format("Do MMMM  YYYY,h:mm:ss a ");
    const db = getFirestore();
    const emailOwn = store.getState().email;
    await updateScore();
    setShowDotLoader(true);
    await setDoc(
      await doc(db, "interviews", `${emailOwn} + ${mom}`),
      {
        CandidateName: candidateName,
        CallDuration: duration,
        Date: date,
        Round: round,
        Support: support,
        Technology: technology,
        Timing: timing,
        Feedback: feedback,
        SubmissionDate: Timestamp.now(),
        submittedBy: emailOwn,
      },
      { merge: true }
    )
      .then(() => {
        setShowDotLoader(false);
        toast.success("form submitted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(() => {
        setShowDotLoader(false);
        toast.error("Try again or reload the page", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }
}
