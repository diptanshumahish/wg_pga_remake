import {
  DocumentData,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";


const db = getFirestore();
export async function getFormdata(form: string) {
  var temp: DocumentData[] = [];
  const colRef = collection(db, form);
  const q = query(colRef, orderBy("SubmissionDate", "desc"));
  onSnapshot(q, async (snapshot) => {
    await snapshot.docs.forEach((doc) => {
      temp.push(doc.data());
    });
    await temp.forEach(function (element, index) {
      element["id"] = index + 1;
    });
    return temp;
  });
}
