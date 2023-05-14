"use strict";

const features = document.getElementById("features");
const company = document.getElementById("company");
const svg = document.querySelector("svg");
const arrow_down = document.getElementById("arrow_down");
const arrow_up = document.getElementById("arrow_up");
const upSvg = `
<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>
`;
const downSvg = `
<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>

`;

let arrow_features = true;
let arrow_company = true;

const header_ul = document.querySelectorAll(".header_uls");

header_ul.forEach((el) => {
  features.addEventListener("click", () => {
    document.querySelector(".features_container").classList.toggle("hidden");
    if (arrow_features === true) {
      arrow_down.innerHTML = upSvg;
    } else if (arrow_features === false) {
      arrow_down.innerHTML = downSvg;
    }
    arrow_features = !arrow_features;
  });

  company.addEventListener("click", () => {
    document.querySelector(".company_container").classList.toggle("hidden");
    if (arrow_company === true) {
      arrow_up.innerHTML = downSvg;
    } else if (arrow_company === false) {
      arrow_up.innerHTML = upSvg;
    }
    arrow_company = !arrow_company;
  });
});
