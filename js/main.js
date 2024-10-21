// loading of page
let overlay = document.querySelector(".overlay");
window.onload = function loading() {
  overlay.style.opacity = "1";
  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-10";

    // play sound on page loading
    let music = document.querySelector("#music");
    music.play();
  }, 1000);
};

// change avatar
let avatar = document.querySelector(".avatar");
let infoBox = document.querySelector(".info");
let avatarImg = document.querySelector("#avatar-img");
let username = localStorage.getItem("username");
let counter = 0;
let avatarObjs = [
  {
    text: `مرحبا ${username} !`,
    img: "./imgs/avatar-hi.webp",
  },
  {
    text: "اختر محافظة من فضلك",
    img: "./imgs/avatar-lets-go.webp",
  },
  {
    text: "استكشف جميع الاماكن الاثرية فى هذه المحافظة",
    img: "./imgs/avatar-look.webp",
  },
  {
    text: "تعلم اكثر عن هذا المكان و جمع النقاط",
    img: "./imgs/avatar-look.webp",
  },
  {
    text: "استخدم النقاط للحصول على تذكرة مجانية لزياة اي مكان ",
    img: "./imgs/avatar-lets-go.webp",
  },
  {
    text: `اتمنى لك رحلة سعيدة ${username}`,
    img: "./imgs/avatar-good.webp",
  },
];
setInterval(() => {
  let p = document.createElement("p");
  if (counter < avatarObjs.length) {
    avatar.style.opacity = "1";
    infoBox.style.opacity = "1";
    infoBox.innerHTML = "";
    avatarImg.src = "";
    avatarImg.src = avatarObjs[counter].img;
    p.append(avatarObjs[counter].text);
    infoBox.appendChild(p);
  }
  counter++;
}, 3500);

// reset score
function resetScore() {
  localStorage.setItem("score", 0);
  localStorage.setItem("tellQuestionNumber", 0);
  localStorage.setItem("tunaQuestionNumber", 0);
  localStorage.setItem("ashmoninQuestionNumber", 0);
  localStorage.setItem("museumQuestionNumber", 0);
  localStorage.setItem("nileQuestionNumber", 0);
  localStorage.setItem("progWidth", 0);
  localStorage.setItem("place1", "");
  localStorage.setItem("place2", "");
  localStorage.setItem("place3", "");
  localStorage.setItem("place4", "");
  localStorage.setItem("place5", "");
  localStorage.setItem("ticket1", "");
  localStorage.setItem("ticket2", "");
  localStorage.setItem("ticket3", "");
  localStorage.setItem("ticket4", "");
}

// change pages functions
function profile() {
  location.replace("profile.html");
}
function logout() {
  location.replace("login.html");
  resetScore();
}
function govs() {
  location.assign("govs.html");
}
function centers() {
  location.assign("centers.html");
}
function mallawi() {
  location.assign("mallawy.html");
}
function nile() {
  location.assign("nile.html");
}
function bhnasa() {
  location.assign("bhnasa.html");
}
function amarna() {
  location.assign("tell-amarna.html");
}
function tuna() {
  location.assign("tuna-jabal.html");
}
function ashmonin() {
  location.assign("ashmonin.html");
}
function museum() {
  location.assign("museum.html");
}
function getTellPoints() {
  location.assign("tell-questions.html");
}
function getTunaPoints() {
  location.assign("tuna-questions.html");
}
function getAshmoninPoints() {
  location.assign("ashmonin-questions.html");
}
function getMuseumPoints() {
  location.assign("museum-questions.html");
}
function getNilePoints() {
  location.assign("nile-questions.html");
}
function getBhnasaPoints() {
  location.assign("bhnasa-questions.html");
}
// set score
let scoreCont = document.querySelectorAll(".score span")[1];
scoreCont.innerHTML = null;
scoreCont.append(localStorage.getItem("score"));
