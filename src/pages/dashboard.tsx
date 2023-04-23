import Head from "next/head";
import {
  NavigationPane,
  RightPane,
  FormsWrapper,
  ApplyLeave,
  TakeBreak,
  UpdateItem,
  SignOutPage,
  SendMail,
} from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { store } from "@/state-mangement/store/store/store";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { navigate } from "@/functions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  // const uid = useRouter().query.uid;
  const [form, setForm] = useState(store.getState().formEnable);
  const [leave, setLeave] = useState(store.getState().leaveEnable);
  const [brek, setBrek] = useState(store.getState().breakEnable);
  const [up, setUp] = useState(store.getState().updateEnable);
  const [signout, setsignout] = useState(store.getState().enableSignout);
  const [enableMail, setEnableMail] = useState(store.getState().enableMail);
  store.subscribe(() => {
    setForm(store.getState().formEnable);
    setLeave(store.getState().leaveEnable);
    setBrek(store.getState().breakEnable);
    setUp(store.getState().updateEnable);
    setsignout(store.getState().enableSignout);
    setEnableMail(store.getState().enableMail);
  });
  useEffect(() => {
    if (
      Cookies.get("isLoggedIn") === "false" ||
      Cookies.get("isLoggedIn") === undefined ||
      Cookies.get("isLoggedIn") === null
    ) {
      navigate({ navigateTo: "/", replace: true });
    }
  });
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          className=" p-8 gap-5 flex min-w-screen min-h-screen max-h-screen overflow-hidden"
          style={{
            backgroundImage: "url(/images/dash.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <FormsWrapper visibility={form} />
          <ApplyLeave visibility={leave} />
          <TakeBreak visibility={brek} />
          <UpdateItem visibility={up} />
          <SignOutPage visibility={signout} />
          <SendMail visibility={enableMail} />

          <NavigationPane />
          <RightPane />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
