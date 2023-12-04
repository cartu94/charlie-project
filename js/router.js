/** 
 * Object containing all the routes 
*/
const routes = {
  'home': '/index.html',
  'act_1': '/acts/act_1.html',
  'act_2': '/acts/act_2.html',
};

/** 
  * Router to a different page
  * @param {string} path - path to navigate to
*/
window.router = function (path) {
  if (routes[path]) {
      window.location.href = routes[path];
  } else {
      console.error('Error: path not found');
  }
}

export default router;