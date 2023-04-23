import { store } from "@/state-mangement/store/store/store";
import { useState } from "react";
import moment from "moment";
import { setNotesArray } from "@/state-mangement/store/slices/notes";
import { Trash } from "@phosphor-icons/react";
import { toast } from "react-toastify";

export default function NotesCompoenents() {
  const [notes, setNotes] = useState(store.getState().note);
  const [addnote, addsetNote] = useState("");

  return (
    <div className="h-[90%] p-4 w-[60%] overflow-y-scroll">
      <div className="flex justify-between">
        {" "}
        <input
          type="text"
          placeholder="add your note here "
          className="p-4 w-[80%] rounded-md bg-formBack text-white focus:outline-none focus:shadow-lg"
          onChange={(e) => {
            addsetNote(e.target.value);
          }}
        />
        <button
          className=" p-4 rounded-md flex items-center justify-center text-white font-bold"
          onClick={() => {
            if (addnote !== "") {
              const tim = moment(moment.now()).format("DD/MM hh/mm");
              setNotes((prev) =>
                prev.filter((e) => {
                  return e.note !== "";
                })
              );
              setNotes([...notes, { note: addnote, time: tim }]);
              toast.success("Note added sucessfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            } else {
              toast.error("Cannot add an empty note", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          }}
        >
          Add note
        </button>
        <button
          onClick={() => {
            store.dispatch(setNotesArray(notes));
            toast.success("Notes saved on your storage", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }}
          className="text-white font-bold"
        >
          save notes
        </button>
      </div>

      {/* display notes  */}
      <div
        className="w-[100%] flex flex-col gap-2 overflow-y-scroll p-2 pl-0 pr-0"
        id="scroll"
      >
        {notes.map((ele, idx) => {
          if (ele.note !== "") {
            return (
              <div
                key={idx}
                className="bg-formBack p-4 rounded-md flex items-center  justify-between"
              >
                <div>
                  <div className="text-white ">{ele.note}</div>
                  <div className="text-xs text-white opacity-70">
                    {ele.time}
                  </div>
                </div>
                <div
                  onClick={() => {
                    setNotes((prev) =>
                      prev.filter((e, id) => {
                        return id !== idx;
                      })
                    );
                    store.dispatch(setNotesArray(notes));
                  }}
                >
                  <Trash color="white" />
                </div>
              </div>
            );
          } else {
            return (
              <div className=" text-white opacity-50 w-[100%] h=[100%] flex items-center justify-center"></div>
            );
          }
        })}
      </div>
    </div>
  );
}
