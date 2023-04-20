import Cookie from "js-cookie";
import moment from "moment";

const loginDate = Cookie.get("loginDateChecker");
const today = moment(moment.now()).format("DD");
// scans date
export function newDay(): boolean {
  if (loginDate !== null && loginDate !== undefined) {
    console.log(today);
    console.log(loginDate);
    if (parseInt(loginDate) !== parseInt(today)) {
      return true;
    }
    return false;
  }
  return true;
}
