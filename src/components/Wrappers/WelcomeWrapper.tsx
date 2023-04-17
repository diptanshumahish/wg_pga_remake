import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import HelloScreen from "../Hello/HelloScreen";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { store } from "@/state-mangement/store/store/store";
import { goBack } from "@/state-mangement/store/slices/changeScreenSlice";

export default function WelcomeWrapper() {
  useEffect(() => {
    store.dispatch(goBack());
  }, []);
  const [screen, setScreen] = useState(0);
  const Items = [
    <Welcome key={0} />,
    <Login key={1} />,
    <HelloScreen key={2} />,
  ];
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
