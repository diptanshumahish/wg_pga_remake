import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getProdScore() {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "productivityScore"));
  var returnData: {
    emails: string[];
    score: number[];
  } = { emails: [], score: [] };
  querySnapshot.forEach((doc) => {
    var tempDoc = Object.entries(doc.data());
    var y = 0;
    for (let i = 0; i < tempDoc.length; i++) {
      y += tempDoc[i][1];
    }

    returnData.emails.push(doc.id);
    returnData.score.push(y);
  });
    return returnData;
//   console.log(returnData);
}
