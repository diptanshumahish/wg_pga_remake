import { useState } from "react";
import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import { store } from "@/state-mangement/store/store/store";
import MainButton from "../Buttons/mainButton";
import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { CaretLeft } from "@phosphor-icons/react";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";
import { updateScore } from "@/functions";
import { getFirestore, setDoc, doc, Timestamp } from "firebase/firestore";
import moment, { duration } from "moment";

export default function Recruiting() {
  // animation
  const [showDotLoader, setShowDotLoader] = useState(false);

  const [date, setDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [visa, setVisa] = useState("");
  const [technology, setTechnology] = useState("");
  const [exp, setExp] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState("");
  const [canEmail, setCanEmail] = useState("");
  const [canPNo, setCanPNo] = useState("");
  const [empMail, setEmpMail] = useState("");
  const [empNumber, setEmpNo] = useState("");
  const [status, setStatus] = useState("");
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
        Recruiting
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
        {/* Experience */}
        <FormHeading title="Experience" key={5} />
        <MainInput
          placeHolder="experience"
          type="text"
          setVarName={setExp}
          key={95}
        />
        {/* Location */}
        <FormHeading title="Location" key={6} />
        <MainInput
          placeHolder="Location"
          type="text"
          setVarName={setLocation}
          key={94}
        />
        {/* Rate */}
        <FormHeading title="Rate" key={7} />
        <MainInput
          placeHolder="Rate"
          type="text"
          setVarName={setRate}
          key={93}
        />
        {/* can email */}
        <FormHeading title="Can Email" key={8} />
        <MainInput
          placeHolder="can email"
          type="text"
          setVarName={setCanEmail}
          key={92}
        />
        {/* can phone number */}
        <FormHeading title="Can Phone Number" key={9} />
        <MainInput
          placeHolder="can Phone number"
          type="text"
          setVarName={setCanPNo}
          key={91}
        />
        {/* emp mail */}
        <FormHeading title="Emp mail" key={10} />
        <MainInput
          placeHolder="Emp mail"
          type="text"
          setVarName={setEmpMail}
          key={90}
        />
        {/* emp number */}
        <FormHeading title="emp number" key={11} />
        <MainInput
          placeHolder="Emp number"
          type="text"
          setVarName={setEmpNo}
          key={90}
        />
        {/* Status */}
        <FormHeading title="Status" key={910} />
        <MainInput
          placeHolder="Enter Status"
          type="text"
          setVarName={setStatus}
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
      await doc(db, "recruiting", `${emailOwn} + ${mom}`),
      {
        name: fullName,
        Date: date,
        technology: technology,
        visa: visa,
        experience: exp,
        location: location,
        rate: rate,
        canEmail: canEmail,
        canPhNo: canPNo,
        empMail: empMail,
        empNumber: empNumber,
        status: status,
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
