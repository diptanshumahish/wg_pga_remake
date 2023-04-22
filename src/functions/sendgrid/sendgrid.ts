import sgMail from "@sendgrid/mail";

interface Message {
  to: string;
  from?: string;
  subject: string;
  text: string;
  html: string;
}
const API_KEY =
  "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";

sgMail.setApiKey(API_KEY);

function getEmails(): string[] {
  return [];
}
function sendMessage() {
  var message = {
    to: 'diptanshumahish2016@gmail.com',
    text: 'hello there',
    from: 'mahishdiptanshumahish@gmail.com',
    html: '<strong>hello there </strong>',
    subject: 'A simple mail',
  };
  sgMail
    .send(message)
    .then(() => {
      console.log("sent");
    })
    .catch((e) => {
      // console.log(e);
    });
}

export { getEmails, sendMessage };
