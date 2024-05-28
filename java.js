const mainButton = document.querySelector("button");
const body = document.body;
const curColor = document.querySelector("#h1");
console.log(mainButton);
function randColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ranColor = `rgb(${red} ${green} ${blue})`;
  return ranColor;
}
mainButton.addEventListener("click", () => {
  console.log("clicked !");
  const newColor = randColor();
  console.log(newColor);
  console.log(curColor.textContent);
  curColor.textContent = newColor;
  body.style.backgroundColor = newColor;
});
