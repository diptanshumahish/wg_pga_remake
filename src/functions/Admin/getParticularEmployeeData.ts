import { DocumentData, doc, getDoc, getFirestore } from "firebase/firestore";

export async function getParticularEmployeeData(email: string, month: string) {
  const db = getFirestore();
  var temp: {
    id: number;
    date: number;
    value: string;
    month: string;
  }[] = [];
  const docRef = doc(db, "workHour", "diptanshumahish2016@gmail.com");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    var data = Object.entries(docSnap.data());

    //get all data
    data.forEach((ele, idx) => {
      const date = parseInt(ele[0].split("/")[0]);
      const month = ele[0].split("/")[1];
      temp.push({ id: idx, date: date, value: ele[1], month: month });
    });

    temp.sort((a: any, b: any) => {
      return a.date - b.date;
    });
    const returnArray = temp.filter((ele) => ele.month === month);
    return returnArray;
  }
}
