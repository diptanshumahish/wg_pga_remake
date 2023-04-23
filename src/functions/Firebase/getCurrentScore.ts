import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import moment from 'moment';
import { store } from '@/state-mangement/store/store/store';

export async function getCurrentScore() {
    var mom1 = moment().format('D/MMMM/YYYY');
    const db = getFirestore();
    const email = store.getState().email
    const docRef = doc(db,'productivityScore',email)
    const docSnap = (await getDoc(docRef));
    if (docSnap.exists()) {
        var data = docSnap.data();
        var map = Object.entries(data);
        var main = map.find((item) => {
            return item[0] === mom1
        })
        if (main == undefined) {
            return 0
        } else {
            return (main[1])
        }
    } else {
        return 0
    }
}