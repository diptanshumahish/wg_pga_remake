import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

export async function getFormdata(form: string) {
  const db = getFirestore();
  var temp: DocumentData[] = [];
  const colRef = collection(db, form);
  const q = query(colRef, orderBy("SubmissionDate", "desc"));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (doc) => {
    temp.push(doc.data());
    temp.forEach(function (element, index) {
      element["id"] = index + 1;
    });
  });

  return temp;
}
