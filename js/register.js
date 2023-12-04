document.getElementById("btn-register").addEventListener("click", function () {
  // prendo il valore inserito dall'utente
  let userName = document.getElementById("player-name").value;
  //   controllo-- se esiste salvo in locale
  if (userName) {
    localStorage.setItem("username", userName);
    alert("Ti sei registrato");
  } else {
    alert("Inserisci un nome valido!");
  }
});

console.log(localStorage.getItem("username"));
