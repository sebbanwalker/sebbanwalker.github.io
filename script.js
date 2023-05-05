history.scrollRestoration = "manual";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

addEventListener("DOMContentLoaded", (event) => {
  const home = document.getElementById("home-container");
  home.classList.add("slide-up");
});
