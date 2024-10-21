// reset localstorage score
function resetScore() {
  localStorage.setItem("score", 0);
  localStorage.setItem("username", "");
  localStorage.setItem("tellQuestionNumber", 0);
  localStorage.setItem("tunaQuestionNumber", 0);
  localStorage.setItem("ashmoninQuestionNumber", 0);
  localStorage.setItem("museumQuestionNumber", 0);
  localStorage.setItem("nileQuestionNumber", 0);
  localStorage.setItem("bhnasaQuestionNumber", 0);
  localStorage.setItem("progWidth", 0);
  localStorage.setItem("place1", "");
  localStorage.setItem("place2", "");
  localStorage.setItem("place3", "");
  localStorage.setItem("place4", "");
  localStorage.setItem("place5", "");
  localStorage.setItem("place6", "");
  localStorage.setItem("ticket1", "");
  localStorage.setItem("ticket2", "");
  localStorage.setItem("ticket3", "");
  localStorage.setItem("ticket4", "");
  localStorage.setItem("ticket5", "");
  localStorage.setItem("ticket6", "");
}
function map1() {
  resetScore();
  location.replace("govs.html");
  localStorage.setItem("username", document.querySelector("#user").value);
}
function map2() {
  resetScore();
  location.replace("govs.html");
  localStorage.setItem("username", document.querySelector("#user").value);
}
function logout() {
  location.replace("RTL/login.html");
}
function signUp() {
  location.replace("RTL/sign-up.html");
}
