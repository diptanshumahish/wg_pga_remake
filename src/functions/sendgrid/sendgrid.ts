import  { updateMail } from "@/state-mangement/store/slices/enableMail";
import { resetHtml } from "@/state-mangement/store/slices/storeHtml";
import { store } from "@/state-mangement/store/store/store";
import sgMail from "@sendgrid/mail";

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
      store.dispatch(updateMail())
    } catch (error) {
      console.log(error);
    }
  });
}

export { sendMessage };
