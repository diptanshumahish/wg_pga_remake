import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getWorkHours() {
  var tempHours: number[] = [];
  var tempEmails: string[] = [];
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "workHour"));
  querySnapshot.forEach((doc) => {
    //get data for each person(email)
    var tempDoc = Object.entries(doc.data());
    var hours = 0;
    var minutes = 0;
    for (let i = 0; i < tempDoc.length; i++) {
      // y += Math.round((tempDoc[i][1]) / 60 * 100) / 100;
      var tempData = tempDoc[i][1].split(":");
      minutes += parseInt(tempData[1]);
      hours += parseInt(tempData[0]);
    }

    hours = hours + minutes / 60;

    tempHours.push(hours);
    tempEmails.push(doc.id);
  });
  //   return finalTimeArray;
  return { emails: tempEmails, hours: tempHours };
}
