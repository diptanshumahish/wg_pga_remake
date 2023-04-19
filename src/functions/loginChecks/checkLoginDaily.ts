import Cookie from "js-cookie";
import moment from "moment";

const loginDate = Cookie.get("loginDateChecker");
const today = moment(moment.now()).format("DD");
// scans date
export function newDay(): boolean {
  if (loginDate === null || loginDate === undefined) {
    return true;
  } else if (
    loginDate !== null &&
    loginDate !== today &&
    loginDate !== undefined
  ) {
    return true;
  }
  return false;
}
