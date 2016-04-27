$(document).ready(function() {
  var breakTime = 5;
  var setTime = 25;
  var sec = 60;
  var min = setTime - 1;
  var countDown = false;
  var timeIt = null;
  var isBreak = false;
  var sound = new Audio('https://dl.dropboxusercontent.com/s/z0x96mdjv3xoxpj/Pew_Pew-DKnight556-1379997159.mp3?dl=0');
  $("#breakUp").click(function() {
    breakTime++;
    $("#break").text(breakTime);
  });
  $("#breakDown").click(function() {
    if(breakTime > 1){
      breakTime--;
    }
    $("#break").text(breakTime);
  });
  $("#timeUp").click(function() {
    setTime++;
    min = setTime - 1;
    sec = 60;
    $("#time").text(setTime);
    $("#clockTime").text(setTime);
  });
  $("#timeDown").click(function() {
    if(setTime > 1){
      setTime--;
    }
    min = setTime - 1;
    sec = 60;
    $("#time").text(setTime);
    $("#clockTime").text(setTime);
  });
  $("#tom").click(function() {
    if(!timeIt){
      timeIt =
        setInterval(function() {
        sec -= 1;
        if (sec <= 0 && min >= 1) {
          min -= 1;
          sec = 59;
        }
        if (min < 1 && sec < 1) {
          if(!isBreak){
            isBreak = true;
            sound.play();
            $("#showBreak").text("Break!");
            min = breakTime - 1;
            sec = 59;
          }
          else{
            isBreak = false;
            sound.play();
            $("#showBreak").text("Go Time!")
            min = setTime - 1;
            sec = 59;
          }
        }
        if(sec < 10){
          $("#clockTime").text(min + ":0" + sec);
        }
        else{
          $("#clockTime").text(min + ":" + sec);
        }
      }, 1000);
    }
    else if(timeIt){
      clearInterval(timeIt);
      timeIt = null;
    }
  });

});