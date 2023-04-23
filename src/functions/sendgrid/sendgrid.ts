import { updateMail } from "@/state-mangement/store/slices/enableMail";
import { resetHtml } from "@/state-mangement/store/slices/storeHtml";
import { store } from "@/state-mangement/store/store/store";
import sgMail from "@sendgrid/mail";
import { toast } from "react-toastify";

interface Message {
  to: { name: string; email: string }[];
  from?: string;
  subject: string;
  text: string;
  html: string;
}
const API_KEY =
  "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";

function sendMessage({ to, from, html, subject, text }: Message) {
  const emails = to;
  emails.forEach(async (ele) => {
    if (ele.name !== "" || ele.email !== "") {
      const message = {
        to: ele.email,
        from: "diptanshu.mahish.21@aot.edu.in",
        subject: subject,
        text: text,
        html: `<h4>Hi ${ele.name},</h4> <br>${html}`,
      };
      sgMail.setApiKey(API_KEY);
      try {
        await sgMail.send(message);
        store.dispatch(resetHtml());
        store.dispatch(updateMail());
        toast.success("Mails have been sent sucessfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.log(error);
        toast.error("Error, please check console logs", {
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
    }
  });
}

export { sendMessage };
