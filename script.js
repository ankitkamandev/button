let button = document.getElementById("myButton");
let resetButton = document.getElementById("resetButton");

let count = 0;
let direction = 1;

button.addEventListener("click", () => {
  count += direction;
  button.textContent = "Clicked " + count + " times ";

  if (count === 10) {
    direction = -1;
    button.textContent = "BAS KAR BHAI, ab wapas jaa raha hu ";
  }

  if (count === 0) {
    direction = +1;
    button.textContent = "Chal phir se shuru Karte hai";
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  direction = 1;
  button.textContent = "Ab aaya na Zero pe";
});
