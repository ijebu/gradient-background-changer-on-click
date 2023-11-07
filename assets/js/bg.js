function changeBG() {
  let container = document.body;
  let red, reds;
  red = Math.floor(Math.random() * 256);
  reds = Math.floor(Math.random() * 256);

  let green, greens;
  green = Math.floor(Math.random() * 256);
  greens = Math.floor(Math.random() * 256);

  let blue, blues;
  blue = Math.floor(Math.random() * 256);
  blues = Math.floor(Math.random() * 256);
  let rgbComplex = "rgb(" + red + " " + green + " " + blue + ")";
  let rgbComplexs = "rgb(" + reds + " " + greens + " " + blues + ")";
  container.style.background =
    "linear-gradient(to top left," +
    rgbComplex +
    "0%" +
    "," +
    rgbComplexs +
    "100%" +
    ")";
}

document.body.addEventListener("click", changeBG());
document.body.addEventListener("click", changeBG);
