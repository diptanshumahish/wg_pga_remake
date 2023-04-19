import { updateState } from "@/state-mangement/store/slices/authState";
import { updateProfilePic } from "@/state-mangement/store/slices/profilePic";
import { updateter } from "@/state-mangement/store/slices/updateEnable";
import { store } from "@/state-mangement/store/store/store";
import { XCircle } from "@phosphor-icons/react";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
interface Props {
  visibility: boolean;
}

export default function UpdateItem({ visibility }: Props) {
  const [bgImg, setBgImg] = useState(store.getState().profPic);
  const [storeName, setStoreName] = useState("");
  const [sucess, SetSucess] = useState(false);
  const [nameSucess, setNameSucess] = useState(false);
  const auth = getAuth();
  store.subscribe(() => {
    setBgImg(store.getState().profPic);
  });
  return (
    <>
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
          className="bg-slate-900 rounded-lg shadow-lg p-6 flex flex-col gap-2"
          style={{ width: "30vw" }}
        >
          <div className="flex justify-between text-3xl font-bold text-white">
            <span>Profile Settings</span>
            <XCircle
              className="cursor-pointer"
              onClick={() => {
                store.dispatch(updateter());
              }}
            />
          </div>
          <div className="text-white text-xs">
            Make sure to update your full name and profile picture before
            working, and in case your current email is non working, inform the
            admin.
          </div>
          <div>
            <div className="flex  justify-center flex-col p-4 gap-2">
              <div className="text-white text-2xl">Profile Picture</div>
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                }}
              >
                <input
                  type="file"
                  className=""
                  onChange={(e) => {
                    if (e.target.files !== null) {
                      updateImage(e.target.files[0])
                        .then(() => {
                          SetSucess(true);
                        })
                        .catch((e) => {
                          SetSucess(false);
                          console.log(e);
                        });
                    }
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    cursor: "pointer",
                    display: "inline",
                  }}
                />
              </div>
              <div
                className="bg-white rounded-md p-2 flex justify-between items-center shadow-md"
                style={{ display: sucess ? "flex" : "none" }}
              >
                Sucessfully updated profile picture
                <XCircle
                  className="cursor-pointer"
                  onClick={() => {
                    SetSucess(false);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2  ">
            <div className="text-2xl text-white w-max text-center">
              Update your Full Name
            </div>
            <input
              type="text"
              className="rounded-md p-2"
              placeholder="Update your full name here"
              onChange={(e) => {
                setStoreName(e.target.value);
              }}
            />
            <button
              className="bg-primary p-2 rounded-md text-white"
              onClick={() => {
                if (auth.currentUser !== null) {
                  updateProfile(auth.currentUser, {
                    displayName: storeName,
                  }).then(() => {
                    store.dispatch(updateState(storeName));
                    setNameSucess(true);
                  });
                }
              }}
            >
              Update name
            </button>
            <div
              className="bg-white p-2 rounded-md flex justify-between items-center"
              style={{
                display: nameSucess ? "flex" : "none",
              }}
            >
              Sucessfully updated name{" "}
              <XCircle
                className="cursor-pointer"
                onClick={() => {
                  setNameSucess(false);
                }}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  async function updateImage(e: File) {
    const storage = getStorage();
    const fileRef = ref(
      storage,
      "profilePics/" + store.getState().uid + ".png"
    );
    await uploadBytes(fileRef, e);
    await getDownloadURL(fileRef).then((url) => {
      if (auth.currentUser !== null) {
        updateProfile(auth.currentUser, {
          photoURL: url,
        }).then(() => {
          store.dispatch(updateProfilePic(url));
        });
      }
    });
  }
}
