import { DocumentData, doc, getDoc, getFirestore } from "firebase/firestore";

export async function getParticularEmployeeData(email: string, month: string) {
  const db = getFirestore();
  var temp: DocumentData = [];
  const docRef = doc(db, "workHour", "diptanshumahish2016@gmail.com");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    var data = Object.entries(docSnap.data());

    //get all data
    data.forEach((ele, idx) => {
      const date = ele[0].split("/")[0];

      temp.push({ id: idx, date: date, value: ele[1] });
    });
    console.log(temp);
    return temp;
  }
}
