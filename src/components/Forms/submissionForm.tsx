import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import { useState } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import MainButton from "../Buttons/mainButton";
import { store } from "@/state-mangement/store/store/store";
import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { DotLoader } from "react-spinners";
import { updateScore } from "@/functions";
import { getFirestore, setDoc, doc, Timestamp } from "firebase/firestore";
import moment, { duration } from "moment";
import { toast } from "react-toastify";

export default function SubmissionForm() {
  // animation
  const [showDotLoader, setShowDotLoader] = useState(false);

  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState("");
  const [formEmail, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [mob, setMob] = useState(0);
  const [candidate, setCandidate] = useState("");
  const [endClient, setEndClient] = useState("");
  const [recruit, setRecruit] = useState("");
  const [feedBack, setFeedBack] = useState("");
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
          Submissions
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
          {/* date  */}
          <FormHeading title="Date" key={2} />
          <MainInput
            placeHolder="Enter Date"
            type="date"
            setVarName={setDate}
            key={98}
          />
          {/* Rate  */}
          <FormHeading title="Rate" key={3} />
          <MainInput
            data={{
              dataList: "Rates",
              options: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70],
            }}
            placeHolder="Enter rate"
            type="text"
            setVarName={setRate}
            key={97}
          />
          {/* Email  */}
          <FormHeading title="Email" key={4} />
          <MainInput
            placeHolder="Enter Email"
            type="text"
            setVarName={setEmail}
            key={96}
          />
          {/* organization  */}
          <FormHeading title="Organization" key={5} />
          <MainInput
            placeHolder="Enter Organization"
            type="text"
            setVarName={setOrg}
            key={95}
          />
          {/* Mobile Number  */}
          <FormHeading title="Mobile Number" key={6} />
          <MainInput
            placeHolder="Enter Mobile Number"
            type="tel"
            setVarName={setMob}
            key={95}
          />
          {/* candidate  */}
          <FormHeading title="Candidate" key={7} />
          <MainInput
            placeHolder="Enter candidate"
            type="text"
            setVarName={setCandidate}
            key={94}
          />
          {/* end client  */}
          <FormHeading title="End Client" key={8} />
          <MainInput
            placeHolder="Enter end client"
            type="text"
            setVarName={setEndClient}
            key={93}
          />
          {/* recruiter  */}
          <FormHeading title="Recruiter" key={9} />
          <MainInput
            placeHolder="Enter recruiter"
            type="text"
            setVarName={setRecruit}
            key={92}
          />
          {/* feedback  */}
          <FormHeading title="Feedback" key={10} />
          <MainInput
            placeHolder="Enter feedback"
            type="text"
            setVarName={setFeedBack}
            key={91}
          />
          {/* your email  */}
          <FormHeading title="Your Email" key={40} />
          <MainInput
            placeHolder=""
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
    </div>
  );
  async function update() {
    const mom = moment(moment.now()).format("Do MMMM  YYYY,h:mm:ss a ");
    const db = getFirestore();
    const emailOwn = store.getState().email;
    await updateScore();
    setShowDotLoader(true);
    await setDoc(
      await doc(db, "submissions", `${emailOwn} + ${mom}`),
      {
        Date: date,
        Name: fullName,
        Rate: rate,
        Email: formEmail,
        Organization: org,
        MobileNumber: mob,
        Candidate: candidate,
        EndClient: endClient,
        Recruiter: recruit,
        Feedback: feedBack,
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
