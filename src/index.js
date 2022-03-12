import _ from "lodash";
import "./style.css";
import home from "./home";
// import clear from "./clear";

home();

let homeBtn = document.querySelector(".logo");
let menuBtn = document.querySelector("#menu");
let cateringBtn = document.querySelector("#consulting");
let aboutBtn = document.querySelector("#about");

const swithPage = (btn, background, text) => {
  btn.addEventListener("click", function () {
    let elem = document.querySelector(".welcome");
    let container = document.querySelector(".container");

    elem.innerText = text;
    container.style.backgroundImage = `url(${background})`;
  });
};

swithPage(homeBtn, "../src/home.jpg", "Welcome Home");
swithPage(menuBtn, "../src/bar.jpg", "Menu");
swithPage(cateringBtn, "../src/catering.jpg", "Catering & Consulting");
swithPage(aboutBtn, "../src/about.jpg", "About Us");
