import { navigate } from "@/functions";
import { updateSignout } from "@/state-mangement/store/slices/enableSignout";
import { resetNotes } from "@/state-mangement/store/slices/notes";
import { resetBreak } from "@/state-mangement/store/slices/subTractBreak";
import { store } from "@/state-mangement/store/store/store";
import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";

interface Props {
  visibility: boolean;
}

export default function SignOutPage({ visibility }: Props) {
  const auth = getAuth();
  return (
    <div
      className="top-0 absolute left-0 bottom-0 z-10"
      style={{
        display: visibility ? "flex" : "none",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        position: "absolute",
        backgroundColor: "#2e106578",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        className="bg-slate-900 rounded-md shadow-lg p-8  text-white  "
        id="scroll"
        style={{ maxHeight: "80vh", overflowY: "scroll" }}
      >
        <div className="text-red font-bold text-3xl text-center p-2">
          Sure to sign out ?
        </div>
        <div className="text-white text-xs">
          Signing out will update your data to server and you would not be able
          to login again today.You have worked for {store.getState().countTime}{" "}
          hrs
        </div>
        <div className="p-2 flex justify-center gap-3">
          <button
            className="bg-red p-2 rounded-md"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  Cookies.set("isLoggedIn", "false");
                  Cookies.set("firstLogin", "");
                  store.dispatch(resetBreak());
                })
                .then(() => {
                  store.dispatch(updateSignout());
                  navigate({ navigateTo: "/" });
                });
            }}
          >
            sign out
          </button>
          <button
            className="bg-white p-2 rounded-md text-slate-950"
            onClick={() => {
              store.dispatch(updateSignout());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
