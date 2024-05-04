// IIFE stands for Immediately Invoked Function Expression

// normal
function chai() {
  console.log(`DB CHAI CONNECTED`);
}
chai();
// DB CONNECTED

// IIFE function
(function Tea() {
  console.log(`DB TEA CONNECTED`);
})();
