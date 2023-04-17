import { useState } from "react";
import MainForm from "../Forms/mainForm";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  visibility: boolean;
}

export default function FormsWrapper({ visibility = false }: Props) {
  const [formsIndex, setFormsIndex] = useState(0);
  const forms = [<MainForm />];
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
          key={10}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {forms[formsIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
