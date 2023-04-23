import { updateFormNumber } from "@/state-mangement/store/slices/formState";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import FormHeading from "../FormInputs/FormHeadings";
import MainInput from "../FormInputs/mainInput";
import { useState } from "react";
import MainButton from "../Buttons/mainButton";
import moment from "moment";
import { initFirebase, updateScore } from "@/functions";
import { setDoc, doc, getFirestore, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";

export default function CandidatesForm() {
  // animation
  const [showDotLoader, setShowDotLoader] = useState(false);

  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [technology, setTechnology] = useState("");
  const [visa, setVisa] = useState("");
  const [experience, setExperience] = useState("");
  const [w2, setW2] = useState("");
  const [location, setLocation] = useState("");
  const [oneTwoJob, setOneTwoJob] = useState("");
  const [onesitOrRemote, setOnsiteRemote] = useState("");
  const [rate, setRate] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState(0);
  const [ssn, setSSN] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [payementMode, setPaymentMode] = useState("");
  const [education, setEductaion] = useState("");
  const [usYear, setUSYear] = useState("");
  const [availability, setAvailability] = useState("");
  const [support, setSupport] = useState("");
  const [comments, setComments] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState(
    store.getState().email
  );
  const app = initFirebase();

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
          Candidates
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
          {/* technology  */}
          <FormHeading title="Technology" key={5} />
          <MainInput
            data={{
              dataList: "technologies",
              options: [
                "Java",
                ".NET Developer",
                "Flutter",
                "C",
                "ReactJs",
                "NextJs",
                "Python",
                "Windows",
                "Fullstack",
                "Springboot",
              ],
            }}
            placeHolder="Enter technology"
            type="text"
            setVarName={setTechnology}
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
          {/* Visa  */}
          <FormHeading title="Visa" key={7} />
          <MainInput
            placeHolder="Enter visa"
            type="text"
            setVarName={setVisa}
            key={94}
          />
          {/* Experience  */}
          <FormHeading title="Experience" key={8} />
          <MainInput
            placeHolder="Enter experience"
            type="text"
            setVarName={setExperience}
            key={93}
          />
          {/* W2  */}
          <FormHeading title="W2" key={9} />
          <MainInput
            placeHolder="Enter w2"
            type="text"
            setVarName={setW2}
            key={92}
          />
          {/* Location  */}
          <FormHeading title="Location" key={10} />
          <MainInput
            placeHolder="Enter location"
            type="text"
            setVarName={setLocation}
            key={91}
          />
          {/* 1/2 job  */}
          <FormHeading title="1/2 Job" key={11} />
          <MainInput
            placeHolder="1/2 job"
            type="text"
            data={{ dataList: "onetwo", options: ["One", "Two"] }}
            setVarName={setOneTwoJob}
            key={90}
          />
          {/* onsite */}
          <FormHeading title="Onesite/Remote" key={12} />
          <MainInput
            data={{ dataList: "OneSite", options: ["Onesite", "remote"] }}
            placeHolder="Enter onesite or remote "
            type="text"
            setVarName={setOnsiteRemote}
            key={89}
          />
          {/* SSN */}
          <FormHeading title="SSN" key={13} />
          <MainInput
            placeHolder="Enter SSN "
            type="text"
            setVarName={setSSN}
            key={88}
          />
          {/* linkedin */}
          <FormHeading title="LinkedIN" key={14} />
          <MainInput
            placeHolder="Enter LinkedIN "
            type="text"
            setVarName={setLinkedIn}
            key={87}
          />
          {/* payment mode  */}
          <FormHeading title="Payment Mode" key={15} />
          <MainInput
            data={{
              dataList: "PaymentMode",
              options: ["Online", "Cash", "Paid", "Unpaid", "UPI"],
            }}
            placeHolder="Enter payment mode "
            type="text"
            setVarName={setPaymentMode}
            key={86}
          />
          {/* eductaion */}
          <FormHeading title="Education" key={16} />
          <MainInput
            placeHolder="Enter education "
            type="text"
            setVarName={setEductaion}
            key={85}
          />
          {/* us entry year  */}
          <FormHeading title="US Entry year" key={17} />
          <MainInput
            placeHolder="Enter us enter year "
            type="text"
            setVarName={setUSYear}
            key={84}
          />
          {/* availability  */}
          <FormHeading title="Availibility" key={18} />
          <MainInput
            placeHolder="Enter availibility "
            type="text"
            setVarName={setAvailability}
            key={83}
          />
          {/* support */}
          <FormHeading title="Support" key={19} />
          <MainInput
            placeHolder="Support "
            type="text"
            setVarName={setSupport}
            key={82}
          />
          {/* comments */}
          <FormHeading title="Comment" key={19} />
          <MainInput
            placeHolder="comments "
            type="text"
            setVarName={setComments}
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
      await doc(db, "candidates", `${emailOwn} + ${mom}`),
      {
        Date: date,
        Name: fullName,
        Technology: technology,
        Visa: visa,
        Experience: experience,
        W2: w2,
        Loc: location,
        education: education,
        oneTwoJob: oneTwoJob,
        Onsite: onesitOrRemote,
        Rate: rate,
        Email: email,
        MobileNumber: mob,
        SSN: ssn,
        LinkedIn: linkedIn,
        PaymentMode: payementMode,
        Us: usYear,
        Availability: availability,
        Support: support,
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
