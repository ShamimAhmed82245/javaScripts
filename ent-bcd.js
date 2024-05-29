// const body = document.body;
const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

/// capturing
// child.addEventListener(
//   "click",
//   () => {
//     console.log("Capturing !!! child!");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Capturing !!! parent!");
//   },
//   true
// );
// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("Capturing !!! GrandParent!");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Capturing !!! body!");
//   },
//   true
// );

// /// bubbling
// child.addEventListener("click", () => {
//   console.log("Clicked on child!");
// });
// parent.addEventListener("click", () => {
//   console.log("Clicked on parent!");
// });
// grandParent.addEventListener("click", () => {
//   console.log("Clicked on GrandParent!");
// });
// document.body.addEventListener("click", () => {
//   console.log("Clicked on body!");
// });

grandParent.addEventListener("click", (e) => {
  console.log(e.target);
});
