import { getSkillsList } from "./components.js";
import {
  closeIcon,
  hamBarIcon,
  mobileMenu,
  mobileMenuToggleButton,
  mySkillsListGroup,
  preloader,
} from "./elements.js";
import { fetchData } from "./utils.js";

// handle mobile menu nav
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

const showMySkillsList = async () => {
  const { data } = await fetchData({
    url: "/data/myskills.json",
  });

  let mySkillsList = "";
  data.map((d) => {
    mySkillsList += getSkillsList(d);
  });

  mySkillsListGroup.innerHTML = mySkillsList;
};

const main = async () => {
  await showMySkillsList();
  preloader.classList.add("hidden");
};

main();
