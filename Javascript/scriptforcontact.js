const successMessage = document.getElementById("button1");
const checkMessage = document.getElementById("checkEntry");
const checkMessageEmail = document.getElementById("checkEntryEmail");

function validate_input() {
  if (checkMessage.value == "") {
    button1.disabled = true;
  } else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(checkMessageEmail.value)) {
      button1.disabled = false;
    } else {
      button1.disabled = true;
    }
  }
}

successMessage.addEventListener("click", function() {
  alert("Message successfully submitted.");
});

validate_input();

checkMessageEmail.onkeyup = validate_input;
checkMessage.onkeyup = validate_input;
