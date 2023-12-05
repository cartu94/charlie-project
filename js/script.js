import router from "./router.js";
import register from "./register.js";
import { act1, act2, act3, ending } from "./dialogue.js";
import showTextNode from "./dialogue.js";

window.registerAndMove = function (event) {
  event.preventDefault();
  register();
  if (document.getElementById("player-name").value) router("act_1");
};
console.log(sessionStorage.getItem("username"));


const actMapping = {
  "/html/act_1.html": act1,
  "/html/act_2.html": act2,
  "/html/act_3.html": act3,
  "/html/ending.html": ending,
};

function startAct() {
  if (
    window.location.pathname !== "/index.html" &&
    window.location.pathname !== "/html/register.html"

  ) {
  showTextNode(1, actMapping[window.location.pathname]);  
  }
}

startAct();
