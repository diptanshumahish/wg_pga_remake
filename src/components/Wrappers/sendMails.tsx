import { sendMessage } from "@/functions/sendgrid/sendgrid";
import { updateMail } from "@/state-mangement/store/slices/enableMail";
import { store } from "@/state-mangement/store/store/store";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { parse } from "papaparse";
import { spawn } from "child_process";
import { resetHtml, setHtml } from "@/state-mangement/store/slices/storeHtml";
import { toast } from "react-toastify";
interface Props {
  visibility: boolean;
}
interface emails {
  name: string;
  email: string;
}

export default function SendMail({ visibility }: Props) {
  const [emails, setEmails] = useState([{ name: "", email: "" }]);
  const [subject, setSubject] = useState("");
  const [plainText, setPlainText] = useState("");
  const [htmlText, setHtmlText] = useState(store.getState().changeHtml);
  const [highlight, setHighight] = useState(false);
  const [drop, setDrop] = useState("Drop CSV your file here");
  store.subscribe(() => {
    setHtmlText(store.getState().changeHtml);
  });
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
                store.dispatch(resetHtml());
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
                <div
                  className="bg-slate-800 p-4 rounded-md cursor-pointer w-max"
                  style={{ backgroundColor: highlight ? "green" : "#1e293b" }}
                  onDragEnter={() => {
                    console.log("hi");
                    setHighight(true);
                    setDrop("Drop the file here");
                  }}
                  onDragLeave={() => {
                    setHighight(false);
                    setDrop("Drop CSV your file here");
                  }}
                  onDragOver={(e) => {
                    setHighight(true);
                    e.preventDefault();
                    console.log("drag");
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setHighight(false);

                    Array.from(e.dataTransfer.files)
                      .filter((ele) => ele.type === "text/csv")
                      .forEach(async (ele) => {
                        const text = await ele.text();
                        const res = await parse<emails>(text, { header: true });
                        setEmails(res.data);
                      });
                    toast.success("Sucessfully added the CSV", {
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
                >
                  {drop}
                </div>
                OR
                <div className="flex gap-2 items-center">
                  {" "}
                  <input
                    type="file"
                    placeholder="click here to upload"
                    className="bg-slate-800 p-4 rounded-md cursor-pointer hover:bg-opacity-70"
                    accept="text/csv"
                    name="CSV"
                    onChange={(e) => {
                      if (e.target.files !== null) {
                        Array.from(e.target.files)
                          .filter((ele) => ele.type === "text/csv")
                          .forEach(async (ele) => {
                            const text = await ele.text();
                            const res = await parse<emails>(text, {
                              header: true,
                            });
                            setEmails(res.data);
                          });
                        toast.success("Sucessfully added the CSV", {
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
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
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
                onChange={(e) => {
                  setPlainText(e.target.value);
                }}
                required
              />
            </div>

            {/* enter the rich html  */}
            <div>
              <div className="text-xl">4. Enter the richly formatted html</div>
              <textarea
                name="html"
                className=" p-2 rounded-md bg-formBack mt-2 focus:outline-none focus:bg-slate-800 w-[100%] "
                placeholder="Enter the html mail"
                onChange={(e) => {
                  store.dispatch(setHtml(e.target.value));
                  console.log(store.getState().changeHtml);
                }}
              />
            </div>

            {/* send button  */}
            <button
              className="bg-primary p-2 rounded-sm"
              onClick={() => {
                if (emails.length === 1) {
                  toast.error("Atleast add two emails in your csv", {
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
                  sendMessage({
                    html: htmlText,
                    subject: subject,
                    text: plainText,
                    to: emails,
                  });
                }
              }}
            >
              Submit
            </button>

            {/* render output */}
            {emails.length !== 1 && (
              <div>
                <span className="text-2xl ">Preview Reciepents</span>{" "}
                <table className="bg-formBack rounded-md w-[100%] ">
                  <tr className="bg-primary">
                    <th className="text-left p-4 ">Email</th>
                    <th className="text-left p-4">Name</th>
                  </tr>

                  {emails.map((ele, idx) => {
                    return (
                      <tr className="" key={idx}>
                        <td className="p-4 text-white">{ele.name}</td>
                        <td className="p-4 text-white">{ele.email}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            )}

            {htmlText !== `unset` && (
              <div className="p-4">
                <div className="text-2xl">Preview Email</div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div>To: </div>
                    <div className="flex flex-col">
                      {emails.map((ele, idx) => {
                        return <span key={idx}>{ele.email}</span>;
                      })}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div>Subject:</div>
                    <div className="flex ">{subject}</div>
                  </div>
                  <div
                    className="text-slate-950"
                    style={{ color: "unset" }}
                    dangerouslySetInnerHTML={{
                      __html: htmlText,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
