import { navigate } from "./navigation/navigate";
import { initFirebase } from "./Firebase/config";
import { newDay } from "./loginChecks/checkLoginDaily";
import { isLoggedIn } from "./loginChecks/checkisLoggedIn";
import { getOS } from "./helper/osCheck";
import { getCurrentScore } from "./Firebase/getCurrentScore";
import { updateScore } from "./Firebase/updateScore";
export {
  navigate,
  initFirebase,
  newDay,
  isLoggedIn,
  getOS,
  getCurrentScore,
  updateScore,
};
