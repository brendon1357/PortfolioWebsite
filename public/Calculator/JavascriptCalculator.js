const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");
const infoBtn = document.querySelector(".info-btn");
const sqrtBtn = document.getElementById("sqrt");

sqrtBtn.addEventListener("click", function () {
  if (screen.value === "") {
    alert("Please enter a number before selecting the square root function.");
  } else {
    let value = screen.value;
    screen.value = Math.sqrt(value);
  }
});

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let number = btns[i].getAttribute("data-num");
    screen.value += number;
  });
}

equalBtn.addEventListener("click", function () {
  if (screen.value === "") {
    alert("Please enter a number.");
  } else if (screen.value === "Math.sqrt")
    alert(
      "Please select info button for more information regarding to square root operations."
    );
  else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

clearBtn.addEventListener("click", function () {
  screen.value = "";
});

var btn = document.getElementById("info-btn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
