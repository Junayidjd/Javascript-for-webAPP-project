const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // consoel.log(date.toDateString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
