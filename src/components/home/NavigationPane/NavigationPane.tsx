import { store } from "@/state-mangement/store/store/store";
import { useEffect, useState } from "react";
import {
  Table,
  DoorOpen,
  User,
  SignOut,
  Envelope,
} from "@phosphor-icons/react";
import { getAuth } from "firebase/auth";
import { goBack } from "@/state-mangement/store/slices/changeScreenSlice";
import { updateFormEnable } from "@/state-mangement/store/slices/formEnabe";
import { updateLeaveEnable } from "@/state-mangement/store/slices/leaveEnable";
import { updateter } from "@/state-mangement/store/slices/updateEnable";
import { updateSignout } from "@/state-mangement/store/slices/enableSignout";
import { updateMail } from "@/state-mangement/store/slices/enableMail";

export default function NavigationPane() {
  useEffect(() => {
    store.dispatch(goBack());
  }, []);
  console.log(getAuth());
  const [profImg, setProfImg] = useState(store.getState().profPic);
  const [name, setName] = useState(store.getState().authState);
  const auth = getAuth();

  const email = store.getState().email;

  store.subscribe(() => {
    setProfImg(store.getState().profPic);
    setName(store.getState().authState);
  });
  return (
    <div
      className=" top-0 left-0  p-4 rounded-md shadow-md flex gap-3 flex-col "
      style={{
        width: "20vw",
        minWidth: "280px",
        height: "90vh",
        backgroundColor: "#2b2e3257",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        className="bg-white h-1/4 rounded-sm shadow-md"
        style={{
          backgroundImage: `url(${profImg})`,
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className=" p-3 flex flex-col  justify-end text-white rounded-sm"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            background: "linear-Gradient(transparent,black)",
          }}
        >
          <span className=" text-xl font-bold">{name}</span>
          <span className=" text-xs">{email}</span>
        </div>
      </div>
      <div className="text-white">
        <span className="text-xs  font-extralight">Actions</span>
        <div className=" p-4 pl-0 pr-0 flex flex-col gap-3">
          <div
            onClick={() => {
              store.dispatch(updateFormEnable());
            }}
            className="flex justify-between p-4  items-center shadow-xl rounded-md cursor-pointer"
            style={{ backgroundColor: "#b8bcc21c" }}
          >
            Form Submissions <Table size={19} />
          </div>

          {/* for the mailing  */}
          <div
            onClick={() => {
              store.dispatch(updateMail());
            }}
            className="flex justify-between p-4  items-center shadow-xl rounded-md cursor-pointer"
            style={{ backgroundColor: "#b8bcc21c" }}
          >
            Mailing <Envelope size={19} />
          </div>

          <div
            onClick={() => {
              store.dispatch(updateLeaveEnable());
            }}
            className="flex justify-between p-4 bg-white items-center shadow-xl rounded-md cursor-pointer "
            style={{ backgroundColor: "#b8bcc21c" }}
          >
            Apply Leave <DoorOpen size={19} />
          </div>
        </div>
        <span className="text-xs  font-extralight">Profile</span>
        <div className=" p-4 pl-0 pr-0 flex flex-col gap-3">
          <div
            className="flex justify-between p-4  items-center shadow-xl rounded-md cursor-pointer"
            style={{ backgroundColor: "#b8bcc21c" }}
            onClick={() => {
              store.dispatch(updateter());
            }}
          >
            Profile Settings
            <User size={19} />
          </div>

          <div
            onClick={() => {
              store.dispatch(updateSignout());
            }}
            className="flex justify-between p-4 bg-white items-center shadow-xl rounded-md cursor-pointer "
            style={{ backgroundColor: "#b8bcc21c" }}
          >
            Signout <SignOut size={19} />
          </div>
        </div>
      </div>
      <span className="text-xs text-white">version 4.2.2 stable</span>
    </div>
  );
}
