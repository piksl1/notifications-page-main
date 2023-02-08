let readMark = document.querySelector(".notifications .functions a");
let notificationCounter = document.querySelector(".counter");
readMark.addEventListener("click", function () {
  readMark.style.color = "hsl(1, 90%, 64%)";
  notificationCounter.innerHTML = 0;
});

// function reseter() {
//   if (changeReadMarkColor) {
//     return ();
//   }
// }
// window.addEventListener("load", () => {
//   reseter();
// });
