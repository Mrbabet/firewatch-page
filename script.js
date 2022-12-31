let paralax0 = document.getElementById("paralax0");
let paralax1 = document.getElementById("paralax1");
let paralax2 = document.getElementById("paralax2");
let paralax3 = document.getElementById("paralax3");
let paralax4 = document.getElementById("paralax4");
let paralax5 = document.getElementById("paralax5");
let paralax6 = document.getElementById("paralax6");
let paralax7 = document.getElementById("paralax7");
let paralax8 = document.getElementById("paralax8");
let paralax = document.getElementById("paralax");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  paralax0.style.top = value * -0.02 + "px";
  paralax1.style.top = value * -0.05 + "px";
  paralax2.style.top = value * -0.11 + "px";
  paralax3.style.top = value * -0.16 + "px";
  paralax4.style.top = value * -0.26 + "px";
  paralax5.style.top = value * -0.36 + "px";
  paralax6.style.top = value * -0.49 + "px";
  paralax7.style.top = value * -0.69 + "px";
  paralax8.style.top = value * -1 + "px";
  paralax.style.top = value * 1 + "px";
});
