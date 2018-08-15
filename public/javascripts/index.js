$(document).ready(() => {
  console.log("index.js is loaded!")
});

$('#btn_start').click(() => {
  let startTime = Math.floor($.now()/1000);


  //TODO: later I want to add .fail .always in the scenario
  $.post("/start", {startTime: startTime}).done(function () {
    console.log("Post startTime is done.")

  });

  console.log("clicked.")




});