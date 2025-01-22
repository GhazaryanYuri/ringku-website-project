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
