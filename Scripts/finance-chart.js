// -----------------------------------------------------------------------

import { financeChartDiagram_data } from "../Data/financeChart_data.js";

const diagramContainer = document.querySelector(".incomeChart");

const config = {
  type: "line",
  data: financeChartDiagram_data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#f0f0f0",
        },
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
          font: {
            size: 12,
          },
        },
      },
    },
  },
};

new Chart(diagramContainer.getContext("2d"), config);

// -----------------------------------------------------------------------

import { financeChartBottom_data } from "../Data/financeChart_data.js";

const financeChartBottomCont = document.querySelector(".finance-bottom");

financeChartBottom_data.forEach((data) => {
  financeChartBottomCont.innerHTML += `<div class="item">
                                        <img src="${data.img}" alt="${data.img}" />
                                        <div class="info">
                                          <p>${data.title}</p>
                                          <h4>$${data.price}</h4>
                                        </div>
                                      </div>`;
});

// -----------------------------------------------------------------------

const infoBar = document.querySelector(".finance-top");
const infoBarBtn = document.querySelector(".infoBarBtn");

infoBarBtn.addEventListener("click", () => {
  infoBar.className = "finance-top-disabled";
});

// -----------------------------------------------------------------------

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
