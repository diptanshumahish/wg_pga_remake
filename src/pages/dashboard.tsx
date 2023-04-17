import Head from "next/head";
import { useRouter } from "next/router";
import { NavigationPane, RightPane, FormsWrapper } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { store } from "@/state-mangement/store/store/store";

export default function Dashboard() {
  const uid = useRouter().query.uid;
  const [form, setForm] = useState(store.getState().formEnable);
  store.subscribe(() => {
    setForm(store.getState().formEnable);
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
          <NavigationPane />
          <RightPane />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
