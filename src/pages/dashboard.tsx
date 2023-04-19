import Head from "next/head";
import { useRouter } from "next/router";
import {
  NavigationPane,
  RightPane,
  FormsWrapper,
  ApplyLeave,
  TakeBreak,
} from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { store } from "@/state-mangement/store/store/store";

export default function Dashboard() {
  const uid = useRouter().query.uid;
  const [form, setForm] = useState(store.getState().formEnable);
  const [leave, setLeave] = useState(store.getState().leaveEnable);
  const [brek, setBrek] = useState(store.getState().breakEnable);
  store.subscribe(() => {
    setForm(store.getState().formEnable);
    setLeave(store.getState().leaveEnable);
    setBrek(store.getState().breakEnable);
  });
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <AnimatePresence>
        <motion.div
          key={1}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className=" p-8 gap-5 flex min-w-screen min-h-screen overflow-hidden"
          style={{
            backgroundImage: "url(/images/dash.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <FormsWrapper visibility={form} />
          <ApplyLeave visibility={leave} />
          <TakeBreak visibility={brek} />

          <NavigationPane />
          <RightPane />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
