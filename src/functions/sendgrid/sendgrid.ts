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
    attachments?: {
        content: string;
        filename: string;
        type: string;
        disposition: string;
    }[];
}
const API_KEY =
    // "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";
    "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";
async function sendMessage({
    to,
    from,
    html,
    subject,
    text,
    attachments,
}: Message) {
    await sgMail.setApiKey(API_KEY);

    const emails = to;
    emails.forEach(async (ele) => {
        if (ele.name !== "" || ele.email !== "") {
            const message = {
                to: ele.email,
                from: "peter@warriorsgit.com",
                subject: subject,
                text: text,
                html: `<h4>Hi ${ele.name},</h4> <br>${html}`,
                ...(attachments && { attachments }),
            };

            try {
                await sgMail.send(message);
                store.dispatch(resetHtml());
                store.dispatch(updateMail());
                toast.success(
                    `Mail has been successfully sent to ${ele.email}`,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
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
