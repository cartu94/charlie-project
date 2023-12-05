import router from "./router.js";
import register from "./register.js";
import { act1 } from "./dialogue.js";
import showTextNode from "./dialogue.js";

window.registerAndMove = function (event) {
  event.preventDefault();
  register();
  if (document.getElementById("player-name").value) router("act_1");
};
console.log(sessionStorage.getItem("username"));

function startAct() {
  if (
    window.location.pathname !== "/index.html" &&
    window.location.pathname !== "/html/register.html"
  ) {
    console.log(window.location.pathname);
    showTextNode(1, act1);
  }
}

startAct();
