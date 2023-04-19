import Cookie from "js-cookie";

const logDetails = Cookie.get("isLoggedIn");
export function isLoggedIn(): boolean {
  console.log(logDetails);
  if (
    logDetails === undefined ||
    logDetails === "false" ||
    logDetails === null
  ) {
    return false;
  }
  return true;
}
