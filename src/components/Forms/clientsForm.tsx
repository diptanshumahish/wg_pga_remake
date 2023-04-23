import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import { useState } from "react";
import MainButton from "../Buttons/mainButton";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";
import { updateScore } from "@/functions";
import moment from "moment";
import { Timestamp, doc, getFirestore, setDoc } from "firebase/firestore";

export default function ClientForm() {
  // animation
  const [showDotLoader, setShowDotLoader] = useState(false);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [org, setOrg] = useState("");
  const [recruit, setRecruiter] = useState("");
  const [comments, setComment] = useState("");
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
          Clients
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

          {/* Rate  */}
          <FormHeading title="Organization" key={3} />
          <MainInput
            placeHolder="Enter rate"
            type="text"
            setVarName={setOrg}
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
          {/* Recruiter */}
          <FormHeading title="Recruiter" key={5} />
          <MainInput
            placeHolder="Enter technology"
            type="text"
            setVarName={setRecruiter}
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

          {/* comments */}
          <FormHeading title="Comment" key={19} />
          <MainInput
            placeHolder="comments "
            type="text"
            setVarName={setComment}
            key={81}
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
    </div>
  );

  async function update() {
    const mom = moment(moment.now()).format("Do MMMM  YYYY,h:mm:ss a ");
    const db = getFirestore();
    const emailOwn = store.getState().email;
    await updateScore();
    setShowDotLoader(true);
    await setDoc(
      await doc(db, "clients", `${emailOwn} + ${mom}`),
      {
        Name: fullname,
        Email: email,
        MobileNumber: mob,
        Organization: org,
        Recruiter: recruit,
        Comments: comments,
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
