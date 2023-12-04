import router from './router.js';
import register from './register.js';

window.registerAndMove = function (event) {
  event.preventDefault();
  register();
  if(document.getElementById("player-name").value) router('act_1');
};
console.log(sessionStorage.getItem("username"));