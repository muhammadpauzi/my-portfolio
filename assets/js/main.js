const mobileMenuToggleButton = document.getElementById(
  "mobileMenuToggleButton"
);
const mobileMenu = document.getElementById("mobileMenu");

const hamBarIcon = mobileMenuToggleButton.querySelector("#hamBarIcon");
const closeIcon = mobileMenuToggleButton.querySelector("#closeIcon");

mobileMenuToggleButton.addEventListener("click", function () {
  if (mobileMenu.classList.toggle("hidden")) {
    // mobileMenu closed/hidden
    closeIcon.setAttribute("class", "hidden h-6 w-6");
    hamBarIcon.setAttribute("class", "block h-6 w-6");
  } else {
    // mobileMenu opened
    closeIcon.setAttribute("class", "block h-6 w-6");
    hamBarIcon.setAttribute("class", "hidden h-6 w-6");
  }
});
