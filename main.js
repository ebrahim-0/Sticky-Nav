const nav = document.querySelector("nav");

const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.screenY >= topOfNav) {
    document.body.classList.add("fixed-nav");
    document.body.style.paddingTop = `30px`;
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener("scroll", fixNav);
