import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getCurrentScore } from "./getCurrentScore";
import { store } from "@/state-mangement/store/store/store";
import moment from "moment";

export async function updateScore() {
  var score = 0;
  await getCurrentScore().then((value) => {
    score = value;
});
  const db = getFirestore();
  await getCurrentScore();
  const email = store.getState().email;
  var mom1 = moment().format("D/MMMM/YYYY");

  setDoc(
    doc(db, "productivityScore", email),
    {
      [mom1]: score + 1,
    },
    { merge: true }
  );
}
