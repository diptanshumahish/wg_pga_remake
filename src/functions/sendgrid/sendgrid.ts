import { updateMail } from "@/state-mangement/store/slices/enableMail";
import { resetHtml } from "@/state-mangement/store/slices/storeHtml";
import { store } from "@/state-mangement/store/store/store";
import sgMail from "@sendgrid/mail";
import { toast } from "react-toastify";

interface Message {
  to: { name: string; email: string }[];
  from: string;
  subject: string;
  text: string;
  html: string;
}
const API_KEY =
  "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";
// "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";

async function sendMessage({ to, from, html, subject, text }: Message) {
  await sgMail.setApiKey(API_KEY);
  const emails = to;
  emails.forEach(async (ele) => {
    if (ele.name !== "" || ele.email !== "") {
      const message = {
        to: ele.email,
        from: from,
        subject: subject,
        text: text,
        html: `<h4>Hi ${ele.name},</h4> <br>${html}`,
      };

      try {
        await sgMail.send(message);
        store.dispatch(resetHtml());
        store.dispatch(updateMail());
        toast.success(`Mail has been sucessfuly sent to ${ele.email}`, {
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
