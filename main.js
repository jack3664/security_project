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
    window.location.href = "code.html";
  } else {
    alert("Incorrect admin password. Intruder alert!");
  }
}

function sqlInjection(){
  var sql = document.getElementById("passwordInput").value;
  if (sql.includes("OR 1=1")){
    window.location.href = "website_logged_in.html";
  } else {
    alert("Incorrect log in");
  }
}

function getHelp(){
  alert("1=1")
}

function captureTheFlag() {
    var password = document.getElementById("passwordInput").value;
    if (password == "pr1cinples of c0mputer s3curity rox") {
        alert("Congrats! You did it :)")
    } else {
        alert("omg get out?")
    }
}
