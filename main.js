function submitPassword() {
  var password = document.getElementById("passwordInput").value;
  if (password == "123qwe123") {
    window.location.href = "logged_in.html";
  } else {
    alert("Who you 👀");
  }
}

function showAdminPopUp() {
  var response = window.prompt(
    "Requires Admin Password \n(hint: I love da Vigenere! Password-Security)"
  );
  if (response == "heumnwkb") {
    alert("Yes");
  } else {
    alert("Incorrect admin password. Intruder alert!");
  }
}
