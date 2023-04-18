import { useState } from "react";
import MainForm from "../Forms/mainForm";
import SubmissionForm from "../Forms/submissionForm";
import { AnimatePresence, motion } from "framer-motion";
import { store } from "@/state-mangement/store/store/store";
import CandidatesForm from "../Forms/candidatesForm";
import ClientForm from "../Forms/clientsForm";
import FeedBackForm from "../Forms/FeedbackForm";
import Interview from "../Forms/interviewForm";
import Recruiting from "../Forms/recruiting";
import MissingRate from "../Forms/missingRate";
interface Props {
  visibility: boolean;
}

export default function FormsWrapper({ visibility = false }: Props) {
  const [formsIndex, setFormsIndex] = useState(0);
  const forms = [
    <MainForm key={128912} />,
    <SubmissionForm key={208318} />,
    <CandidatesForm key={9120912} />,
    <ClientForm key={9102} />,
    <FeedBackForm key={9230920} />,
    <Interview key={98138} />,
    <Recruiting key={9013292} />,
    <MissingRate key={478237} />,
  ];

  store.subscribe(() => {
    setFormsIndex(store.getState().formState);
  });
  return (
    <div
      className="top-0 absolute left-0 bottom-0 z-10"
      style={{
        display: visibility ? "flex" : "none",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        position: "absolute",
        backgroundColor: "#2e106578",
        backdropFilter: "blur(5px)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={formsIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {forms[formsIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
