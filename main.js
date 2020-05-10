function submitPassword() {
  var password = document.getElementById("passwordInput").value;
  if (password == "123qwe123") {
    window.location.href = "logged_in.html";
  } else {
    alert("Who you 👀");
  }
}

function sqlInjection(){
  var sql = document.getElementById("passwordInput").value;
  if (sql.includes("OR 1=1")){
    alert("You got in");
  } else {
    alert("Incorrect log in");
  }
}

function showAdminPopUp() {
  var response = window.prompt(
    "Requires Admin Password \n(hint: I love da Vigenere! Password-Security)"
  );
  if (response == "heumnwkb") {
    window.location.href = "code.html";
  } else {
    alert("Incorrect admin password. Intruder alert!");
  }
}
