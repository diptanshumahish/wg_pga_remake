import {
  goBack,
  goFront,
} from "@/state-mangement/store/slices/changeScreenSlice";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import { MainButton } from "@/components";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateState } from "@/state-mangement/store/slices/authState";
import { getAuth } from "firebase/auth";
import { updateProfilePic } from "@/state-mangement/store/slices/profilePic";
import { updateUid } from "@/state-mangement/store/slices/uid";
import { updateEmail } from "@/state-mangement/store/slices/storeEmail";
import moment from "moment";
import { setLoginTime } from "@/state-mangement/store/slices/loginTime";
import Cookie from "js-cookie";
import { newDay, isLoggedIn, navigate } from "@/functions";

export default function Login() {
  const [uid, setUid] = useState(store.getState().uid);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  useEffect(() => {
    if (isLoggedIn()) {
      navigate({ navigateTo: `/dashboard?uid=${uid}`, replace: true });
    }
  }, []);

  return (
    <div
      className="flex flex-col  justify-start items-start bg-white bg-opacity-10 p-10 rounded-md shadow-md gap-3  "
      style={{ backdropFilter: "blur(9px)" }}
    >
      <span
        onClick={() => {
          store.dispatch(goBack());
        }}
        className="flex items-center text-2xl gap-2 cursor-pointer text-white"
      >
        <CaretLeft size={19} /> Login
      </span>
      <span className="text-white">Login with your registered credentials</span>
      <div className="flex flex-col w-full gap-2">
        <span className="font-bold text-white">Email</span>
        <input
          type="text"
          className=" shadow-sm text-white   bg-formBack  w-full rounded-md p-2 focus:outline-none focus:border-none "
          placeholder="Enter your email"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />

        <span className="font-bold text-white">Password </span>
        <input
          type="password"
          className="shadow-sm  text-white  bg-formBack  w-full rounded-md p-2 focus:outline-none focus:border-none "
          placeholder="Enter your password"
          onChange={(e) => {
            setUserPass(e.target.value);
          }}
        />
      </div>
      <MainButton
        mainContent="Login"
        onActionChange={() => {
          signInWithEmailAndPassword(getAuth(), userEmail, userPass)
            .then((value) => {
              store.dispatch(updateState(value.user.displayName));
              store.dispatch(updateProfilePic(value.user.photoURL));
              store.dispatch(updateUid(value.user.uid));
              store.dispatch(updateEmail(value.user.email));
              store.dispatch(setLoginTime(moment.now()));
              Cookie.set("isLoggedIn", "true");
              if (newDay()) {
                Cookie.set(
                  "loginDateChecker",
                  moment(moment.now()).format("DD")
                );
                Cookie.set(
                  "firstLogin",
                  moment(moment.now()).format("HH:mm:ss")
                );
              }
            })
            .then(() => {
              store.dispatch(goFront());
            });
        }}
      />
      <span className="text-white text-xs">
        By logging in you agree to our terms
      </span>
    </div>
  );
}
