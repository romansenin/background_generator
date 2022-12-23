const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.querySelector("button");

syncColorPickers();

function syncColorPickers() {
  const bodyStyle = window.getComputedStyle(body);
  const background = bodyStyle
    .getPropertyValue("background")
    .match(/linear.+\)\)/)[0];

  css.innerHTML = "<code>" + "background: " + background + ";</code>";

  const colors = background
    .match(/rgb\((\d+), (\d+), (\d+)\).+rgb\((\d+), (\d+), (\d+)\)/)
    .slice(1)
    .map((num) => Number(num));

  color1.value = rgbToHex.apply(null, colors.slice(0, 3));
  color2.value = rgbToHex.apply(null, colors.slice(3));
}

function rgbToHex(r, g, b) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.innerHTML =
    "<code>" + "background: " + body.style.background + ";</code>";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", function () {
  const firstColor = [];
  const secondColor = [];
  for (let i = 0; i < 3; i++) {
    firstColor.push(Math.floor(Math.random() * 256));
    secondColor.push(Math.floor(Math.random() * 256));
  }
  const colorOne = rgbToHex.apply(null, firstColor);
  const colorTwo = rgbToHex.apply(null, secondColor);

  color1.value = colorOne;
  color2.value = colorTwo;
  setGradient();
});
