import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddUser() {
  const [userEmail, changeUserEmail] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const auth = getAuth();
  return (
    <div className="flex justify-between ">
      <div
        className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[45%]"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div>
          <div className="text-2xl font-bold">Add a new user</div>
          <div className="text-xs">Add the email to register a new user</div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="font-bold">Email</div>
          <input
            type="text"
            onChange={(e) => {
              changeUserEmail(e.target.value);
            }}
            className=" bg-inputBack shadow-md p-2 rounded-sm "
            placeholder="Enter user email"
          />
        </div>
        <button
          className="bg-primary p-2 rounded-sm shadow-sm"
          onClick={() => {
            createUserWithEmailAndPassword(auth, userEmail, "1234567").then(
              () => {
                toast.success("Sucessfully added new user", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            );
          }}
        >
          {" "}
          add new user
        </button>
      </div>

      <div
        className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[45%]"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div>
          <div className="text-2xl font-bold">Reset Password</div>
          <div className="text-xs">Add the email to send reset link</div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="font-bold">Email</div>
          <input
            type="text"
            onChange={(e) => {
              setResetEmail(e.target.value);
            }}
            className=" bg-inputBack shadow-md p-2 rounded-sm "
            placeholder="Enter user email"
          />
        </div>
        <button
          className="bg-primary p-2 rounded-sm shadow-sm"
          onClick={() => {
            sendPasswordResetEmail(auth, resetEmail).then(() => {
              toast.success("Sucessfully sent reset email", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
          }}
        >
          {" "}
          Send reset link
        </button>
      </div>
    </div>
  );
}
