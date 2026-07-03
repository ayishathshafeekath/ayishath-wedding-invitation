var weddingDate = new Date("Aug 16, 2026 00:00:00").getTime();

setInterval(function () {
var now = new Date().getTime();
var diff = weddingDate - now;

var days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
"⏳ " + days + " Days Left";
}, 1000);
