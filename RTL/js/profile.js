// profile dashbaord
let sideBox = document.querySelector(".side");
let arrowBtn = document.querySelector(".arrow");
let rightArrow = document.querySelector(".arrow .animate .right");
let leftArrow = document.querySelector(".arrow .animate .left");
let success = document.querySelector("#success");
let fail = document.querySelector("#fail");
let scoreContainer = document.querySelectorAll(".score span")[1];
scoreContainer.innerHTML = null;
scoreContainer.append(localStorage.getItem("score"));

// open and close dashboard
arrowBtn.addEventListener("click", () => {
  sideBox.classList.toggle("open");
  rightArrow.classList.toggle("d-none");
  leftArrow.classList.toggle("d-none");
});

// show and hide redeem
let redeem = document.querySelector("#redeem");
let settings = document.querySelector("#settings");
let redeemBox = document.querySelector(".redeem");
let settingBox = document.querySelector(".settings");
function showHideRedeem() {
  redeemBox.classList.toggle("d-none");
  settingBox.classList.add("d-none");
  redeem.classList.toggle("active");
  settings.classList.remove("active");
}

// redeem points
let pointsCollected = JSON.parse(localStorage.getItem("score"));
let placePionts = document.querySelectorAll("#card .info");
let cards = document.querySelectorAll("#card");
let alertDone = document.querySelector(".done");
let alertError = document.querySelector(".error");
let over = document.querySelector(".profile-page");
let redeemBtn = document.querySelector("#redeem-btn");
let cardsCounter = 0;
function redeemPointsCheck() {
  placePionts.forEach((place) => {
    let redeemPrice = place.dataset.points;
    if (redeemPrice > pointsCollected) {
      cards[cardsCounter].classList.add("locked");
    }
    cardsCounter++;
  });
}
redeemPointsCheck();
function redeemPoints() {
  placePionts.forEach((place) => {
    place.addEventListener("click", (ele) => {
      let redeemPrice = ele.target.parentElement.dataset.points;
      let ticketplace = ele.target.parentElement.dataset.place;
      if (redeemPrice <= pointsCollected) {
        switch (redeemPrice) {
          case "50":
            localStorage.setItem("ticket1", ticketplace);
            console.log(ticketplace);
            break;
          case "100":
            localStorage.setItem("ticket2", ticketplace);
            break;
          case "120":
            localStorage.setItem("ticket3", ticketplace);
            break;
          case "150":
            localStorage.setItem("ticket4", ticketplace);
            break;
          default:
            break;
        }
        success.play();
        let deal = pointsCollected - redeemPrice;
        localStorage.setItem("score", deal);
        scoreContainer.innerHTML = null;
        scoreContainer.append(localStorage.getItem("score"));
        alertDone.classList.remove("d-none");
        over.classList.add("over");
        setTimeout(() => {
          alertDone.classList.add("d-none");
          over.classList.remove("over");
          location.reload();
        }, 1500);
      } else {
        fail.play();
        alertError.classList.remove("d-none");
        over.classList.add("over");
        setTimeout(() => {
          alertError.classList.add("d-none");
          over.classList.remove("over");
        }, 1500);
      }
    });
  });
}

// setting
let perNameCon = document.querySelector(".person-name");
let progressWidth = document.querySelector("#progress-width");
perNameCon.append(localStorage.getItem("username"));
let progW = localStorage.getItem("progWidth");
progressWidth.style.cssText = `width: ${progW}%;`;
function showHideSettings() {
  settingBox.classList.toggle("d-none");
  redeemBox.classList.add("d-none");
  settings.classList.toggle("active");
  redeem.classList.remove("active");
}

// places
const places = [
  localStorage.getItem("place1"),
  localStorage.getItem("place2"),
  localStorage.getItem("place3"),
  localStorage.getItem("place4"),
  localStorage.getItem("place5"),
];
placesCounter = 0;
let visitedPlaces = document.querySelectorAll("#visited-places li");
visitedPlaces.forEach((place) => {
  place.append(places[placesCounter]);
  if (place.innerHTML === "") {
    place.classList.add("d-none");
  }
  placesCounter++;
});

// tickets
const tickets = [
  localStorage.getItem("ticket1"),
  localStorage.getItem("ticket2"),
  localStorage.getItem("ticket3"),
  localStorage.getItem("ticket4"),
];
ticketsCounter = 0;
let buyedTickets = document.querySelectorAll("#buyed-tickets li");
buyedTickets.forEach((ticket) => {
  ticket.append(tickets[ticketsCounter]);
  if (ticket.innerHTML === "") {
    ticket.classList.add("d-none");
  }
  ticketsCounter++;
});
