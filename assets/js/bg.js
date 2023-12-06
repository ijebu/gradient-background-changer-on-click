function gradientBackground() {
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

  // First colour of the gradient
  let rgbFirstGroup = "rgb(" + red + " " + green + " " + blue + ")";
  // Second colour of the gradient
  let rgbSecondGround = "rgb(" + reds + " " + greens + " " + blues + ")";
  container.style.background =
    "linear-gradient(to top left," +
    rgbFirstGroup +
    "0%" +
    "," +
    rgbSecondGround +
    "100%" +
    ")";
}

document.body.addEventListener("click", gradientBackground());
document.body.addEventListener("click", gradientBackground);
