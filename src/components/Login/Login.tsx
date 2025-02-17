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
import Cookie from "js-cookie";
import { newDay, isLoggedIn, navigate, getOS } from "@/functions";
import { resetTime } from "@/state-mangement/store/slices/countTime";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function Login() {
  const [uid, setUid] = useState(store.getState().uid);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [show, setShow] = useState(false);
  const day = newDay();
  const log = isLoggedIn();
  useEffect(() => {
    if (log && !day) {
      navigate({ navigateTo: `/dashboard?uid=${uid}`, replace: true });
    }
    if (getOS() !== "Windows" && getOS() !== "Linux") {
      navigate({ navigateTo: "/error", replace: true });
    }
  }, [log, day, uid]);

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
              if (value.user.email !== "catchmflixx@gmail.com") {
                // second time login
                if (Cookies.get("updateDate") === "updated") {
                  Cookies.set(
                    "updateDate",
                    moment(moment.now()).format("DD/MMMM/YYYY")
                  );
                  toast.warn(
                    "You are logging in the second time today, previous data loss might occur",
                    {
                      position: "top-right",
                      autoClose: 9000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    }
                  );
                }

                // set a default full name
                if (value.user.displayName === null) {
                  store.dispatch(updateState("Unset"));
                } else {
                  store.dispatch(updateState(value.user.displayName));
                }
                // set a default profile picture
                if (value.user.photoURL === null) {
                  store.dispatch(
                    updateProfilePic(
                      "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
                    )
                  );
                } else {
                  store.dispatch(updateProfilePic(value.user.photoURL));
                }
                // set uid
                store.dispatch(updateUid(value.user.uid));

                // different user
                if (store.getState().email !== value.user.email) {
                  Cookie.set(
                    "firstLogin",
                    moment(moment.now()).format("HH:mm:ss"),
                    { expires: 7 }
                  );
                  store.dispatch(updateEmail(value.user.email));
                }
                // login cookie
                Cookie.set("isLoggedIn", "true", { expires: 7 });
                // new day
                if (newDay()) {
                  Cookie.set(
                    "loginDateChecker",
                    moment(moment.now()).format("DD"),
                    { expires: 7 }
                  );
                  Cookie.set(
                    "firstLogin",
                    moment(moment.now()).format("HH:mm:ss"),
                    { expires: 7 }
                  );
                  Cookies.set(
                    "updateDate",
                    moment(moment.now()).format("DD/MMMM/YYYY"),
                    { expires: 7 }
                  );
                  store.dispatch(resetTime());
                }
                // in case of multiple accounts

                if (Cookie.get("firstLogin") === "") {
                  Cookie.set(
                    "firstLogin",
                    moment(moment.now()).format("HH:mm:ss"),
                    { expires: 7 }
                  );
                }
                store.dispatch(goFront());
              } else {
                navigate({
                  navigateTo: `/adminDashboard?uid=${value.user.uid}`,
                });
              }
            })
            .catch((e) => {
              setShow(true);
              toast.error("Wrong credentials,try again", {
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
        }}
      />
      <span
        className="text-red"
        style={{
          display: show ? "block" : "none",
        }}
      >
        Wrong credentials, Try again!
      </span>
      <span className="text-white text-xs">
        By logging in you agree to our terms
      </span>
    </div>
  );
}
