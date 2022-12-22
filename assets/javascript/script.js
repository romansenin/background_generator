const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function changeBackground(color1, color2) {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

changeBackground(color1, color2);

color1.addEventListener("input", function() {
  changeBackground(color1, color2);
});

color2.addEventListener("input", function() {
  changeBackground(color1, color2);
});