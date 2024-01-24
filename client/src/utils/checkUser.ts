export default function checkUser() {
  if (window.localStorage.getItem("user")) {
    const user = window.localStorage.getItem("user");

    return JSON.parse(user!);
  }
  return null;
}
