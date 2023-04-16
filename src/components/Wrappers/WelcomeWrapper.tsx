import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import HelloScreen from "../Hello/HelloScreen";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { store } from "@/state-mangement/store/store/store";

export default function WelcomeWrapper() {
  const [screen, setScreen] = useState(0);
  const Items = [<Welcome />, <Login />,<HelloScreen/>];
  store.subscribe(() => {
    setScreen(store.getState().screenData);
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screen}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {Items[screen]}
      </motion.div>
    </AnimatePresence>
  );
}
