import { useState } from "react";
import Image from "next/image";
import { DotLoader } from "react-spinners";
import { store } from "@/state-mangement/store/store/store";
import { useEffect } from "react";
import { navigate } from "@/functions";
import { goBack } from "@/state-mangement/store/slices/changeScreenSlice";

export default function HelloScreen() {
  const [name, setName] = useState(store.getState().authState);
  const [profilePic, setProfilePic] = useState(store.getState().profPic);
  const [uid, setUid] = useState(store.getState().uid);

  store.subscribe(() => {
    setName(store.getState().authState);
  });
  useEffect(() => {
    navigate({ navigateTo: `/dashboard?uid=${uid}` });
    
  });

  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-slate-950 bg-opacity-20 p-10 rounded-md shadow-md gap-4"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <span className="text-white">Welcome</span>
        {profilePic === null || profilePic === "" ? (
          <Image
            className="rounded-full"
            src="/assets/def.png"
            height={100}
            width={100}
            alt="User avatar"
          />
        ) : (
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              outline: "2px solid white",
              backgroundImage: `url('${profilePic}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {" "}
          </div>
        )}
        <div className="flex flex-col items-center">
          <span className="text-white text-4xl font-bold">
            {name !== null ? <>{name.toString()}</> : <>Unavailable</>}
          </span>
        </div>
        <DotLoader color="white" />
        <span className="text-white">Logging you in</span>
      </div>
    </>
  );
}
