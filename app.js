let button = document.getElementById("btn");
let result = document.getElementById("result");
button.addEventListener("click", function () {
  let seconds = document.getElementById("input").value;
  let resultKm = (seconds / 3).toFixed(1) + " Km";

  if (seconds == "") {
    result.innerHTML = "Please enter a value";
    result.style.color = "red";
  } else {
    result.innerHTML = "You are " + resultKm + " away from the thunder";
    result.style.color = "white";
  }
});
