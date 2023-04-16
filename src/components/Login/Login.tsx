import {
  goBack,
  goFront,
} from "@/state-mangement/store/slices/changeScreenSlice";
import { store } from "@/state-mangement/store/store/store";
import { CaretLeft } from "@phosphor-icons/react";
import { MainButton } from "@/components";

export default function Login() {
  return (
    <div
      className="flex flex-col  justify-start items-start bg-slate-950 bg-opacity-20 p-10 rounded-md shadow-md gap-3  "
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
        />

        <span className="font-bold text-white">Password </span>
        <input
          type="password"
          className="shadow-sm  text-white  bg-formBack  w-full rounded-md p-2 focus:outline-none focus:border-none "
          placeholder="Enter your password"
        />
      </div>
      <MainButton
        mainContent="Login"
        onActionChange={() => {
          store.dispatch(goFront());
        }}
      />
    </div>
  );
}
