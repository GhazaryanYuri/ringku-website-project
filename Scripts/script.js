// ----------------------------------------------------------------------------

import { myWallet_midContent_data } from "../Data/myWallet_midContent_data.js";

const myWallet = document.querySelector(".wallet-mid");
let cards = [];

cards = myWallet_midContent_data.map((item) => {
  const percentage = (item.currentValue / item.maxValue) * 100;

  return `<div class="item">
            <div class="item-header">
              <h3>
                <img src="${item.icon}" alt="${item.icon}" />
                ${item.name}
              </h3>
              <p>Last Paid on ${item.lastPaid}</p>
            </div>
            <div class="item-body">
              <div class="top">
                <h2>$${item.currentValue} <span class="max-value">/ $${
    item.maxValue
  }</span></h2> 
                <span class="progress-percentage">${percentage.toFixed(
                  0
                )}%</span>
              </div>
              <div class="progress-bar" style="--progress: ${percentage}%"></div>
            </div>
          </div>`;
});

const cardsHTML = cards.join("");
myWallet.innerHTML = cardsHTML;

// ----------------------------------------------------------------------------

const navbarBtn = document.querySelector(".navbar-btn");
const navbarLinks = document.querySelector(".links-inactive");
const navbarFooter = document.querySelector(".navbar-footer-disabled");

navbarBtn.addEventListener("click", () => {
  if (navbarLinks.className === "links-inactive") {
    navbarLinks.className = "links-active";
    navbarFooter.className = "navbar-footer-enable";
  } else {
    navbarLinks.className = "links-inactive";
    navbarFooter.className = "navbar-footer-disabled";
  }
});
