/**
 * Funzione che registra l'utente in sessione
 */
window.register = function () {
  // prendo il valore inserito dall'utente
  let userName = document.getElementById("player-name").value;
  //   controllo-- se esiste salvo in sessione
  if (userName) {
    sessionStorage.setItem("username", userName);
    console.log("Ti sei registrato");
  } else {
    console.error("Inserisci un nome valido!");
  }
};

export default register;