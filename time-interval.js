const button = document.querySelector(".btn");
const body = document.body;
console.log(button);

const id = setInterval(() => {
  const red = Math.floor(Math.random() * 200);
  const green = Math.floor(Math.random() * 200);
  const blue = Math.floor(Math.random() * 200);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  console.log(rgb);
  document.body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  console.log("clicked");
  clearInterval(id);
  button.textContent = body.style.background;
  console.log(button.textContent);
});
