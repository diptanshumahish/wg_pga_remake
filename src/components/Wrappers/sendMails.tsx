import { sendMessage, getEmails } from "@/functions/sendgrid/sendgrid";
import { updateMail } from "@/state-mangement/store/slices/enableMail";
import { store } from "@/state-mangement/store/store/store";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
interface Props {
  visibility: boolean;
}

export default function SendMail({ visibility }: Props) {
  const [emails, setEmails] = useState([]);
  const [subject, setSubject] = useState("");
  const [plainText, setPlainText] = useState("");
  const [html, setHtml] = useState("");
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
        className="bg-slate-900 rounded-md shadow-lg p-8  text-white "
        id="scroll"
        style={{ minWidth: "70vw", maxHeight: "80vh", overflowY: "scroll" }}
      >
        <div>
          <span className="text-4xl flex justify-between items-center text-primary font-bold">
            Send Mail{" "}
            <XCircle
              className="cursor-pointer"
              onClick={() => {
                store.dispatch(updateMail());
              }}
            />
          </span>
          <div>
            Make sure you are using this bulk mailing feature only when needed,
          </div>
          {/* main work area  */}
          <div className="p-4 flex flex-col gap-4">
            {/* email enter */}
            <div>
              <div className="text-xl">
                1. Enter the emails as a CSV File below
              </div>
              <div className="flex justify-between pt-2 items-center">
                <div className="bg-slate-800 p-4 rounded-md cursor-pointer">
                  Drag and drop your CSV file here
                </div>
                OR
                <div className="flex gap-2 items-center">
                  {" "}
                  <input
                    type="file"
                    placeholder="click here to upload"
                    className="bg-slate-800 p-4 rounded-md cursor-pointer hover:bg-opacity-70"
                    accept="csv"
                    name="CSV"
                  />
                  <label htmlFor="CSV">Upload CSV</label>
                </div>
              </div>
            </div>

            {/* enter subject */}
            <div>
              <div className="text-xl">2. Enter the subject for the mail</div>
              <input
                type="text"
                name="subject"
                className="w-[100%] p-2 rounded-md bg-formBack mt-2 focus:outline-none focus:bg-slate-800 "
                placeholder="Enter the mail Subject"
                required
              />
            </div>
            {/* enter plain text  */}
            <div>
              <div className="text-xl">
                3. Enter the plain text for the mail
              </div>
              <input
                type="text"
                name="plainText"
                className="w-[100%] p-2 rounded-md bg-formBack mt-2 focus:outline-none focus:bg-slate-800 "
                placeholder="Enter the mail plaint text"
                required
              />
            </div>

            {/* enter the rich html  */}
            <div>
              <div className="text-xl">
                4. Enter the richly formatted html (optional)
              </div>
              <input
                type="file"
                name="html"
                accept="html"
                className=" p-2 rounded-md bg-formBack mt-2 focus:outline-none focus:bg-slate-800 cursor-pointer "
                placeholder="Enter the mail plaint text"
              />
            </div>

            {/* send button  */}
            <button
              className="bg-primary p-2 rounded-sm"
              onClick={() => {
                sendMessage();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
