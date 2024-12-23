const btn = document.querySelector(".btn-up");
const navbar = document.querySelector('nav');

window.addEventListener("scroll", (e) => {
  if (scrollY == 0) {
    btn.style.display = "none";
    navbar.classList.remove('blurry-nav');
  } else {
    btn.style.display = "block";
    navbar.classList.add('blurry-nav');

  }
});
btn.addEventListener("click", (e) => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
});





