import { doc, getDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

export async function getParticularEmployeeScore(email: string, month: string) {
  const db = getFirestore();
  var temp: {
    id: number;
    date: number;
    value: string;
    month: string;
  }[] = [];
  const docRef = doc(db, "productivityScore", email);
  const docSnap = await getDoc(docRef);
  var total: number = 0;
  if (docSnap.exists()) {
    var data = Object.entries(docSnap.data());
    //get all data
    data.forEach((ele, idx) => {
      const date = parseInt(ele[0].split("/")[0]);
      const month = ele[0].split("/")[1];
      total = total + ele[1];
      temp.push({
        id: idx,
        date: date,
        value: ele[1],
        month: month,
      });
    });

    temp.sort((a: any, b: any) => {
      return a.date - b.date;
    });
    const returnArray = temp.filter((ele) => ele.month === month);
    // console.log(returnArray);
    return returnArray;
  }
}
