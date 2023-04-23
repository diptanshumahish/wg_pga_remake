import { navigate } from "./navigation/navigate";
import { initFirebase } from "./Firebase/config";
import { newDay } from "./loginChecks/checkLoginDaily";
import { isLoggedIn } from "./loginChecks/checkisLoggedIn";
import { getOS } from "./helper/osCheck";
export { navigate, initFirebase, newDay, isLoggedIn, getOS };
