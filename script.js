let sec = 0,
  min = 0,
  mil = 0;
document.querySelector("#reset").disabled = true;

//Start Button Onclick
document.querySelector("#start").onclick = () => {
  document.querySelector("#start").style.display = "none";
  document.querySelector("#pause").style.display = "inline-block";
  change();
};

//Pause Button Onclick
document.querySelector("#pause").onclick = () => {
  document.querySelector("#resume").style.display = "inline-block";
  document.querySelector("#pause").style.display = "none";
  document.querySelector("#reset").disabled = false;
  clearInterval(setTimer);
};

//Resume Button Onclick
document.querySelector("#resume").onclick = () => {
  document.querySelector("#pause").style.display = "inline-block";
  document.querySelector("#resume").style.display = "none";
  document.querySelector("#reset").disabled = true;
  change();
};

//Reset Button Onclick
document.querySelector("#reset").onclick = () => {
  document.querySelector("#pause").style.display = "none";
  document.querySelector("#resume").style.display = "none";
  document.querySelector("#start").style.display = "inline-block";
  document.querySelector("#reset").disabled = true;
  sec = 0;
  min = 0;
  mil = 0;
  document.querySelector("#min").innerHTML = `0${min}`;
  document.querySelector("#sec").innerHTML = `0${sec}`;
  document.querySelector("#mil").innerHTML = `00${mil}`;
};

//Setting the Timer
let setTimer;
function change() {
  setTimer = setInterval(() => {
    mil += 50;
    if (mil === 1000) {
      mil = 0;
      sec += 1;
    }
    if (sec === 60) {
      sec = 0;
      min += 1;
    }
    if (sec < 10) {
      document.querySelector("#min").innerHTML = setConsistent(min, 2);
      document.querySelector("#sec").innerHTML = setConsistent(sec, 2);
      document.querySelector("#mil").innerHTML = setConsistent(mil, 3);
    } else {
      document.querySelector("#min").innerHTML = setConsistent(min, 2);
      document.querySelector("#sec").innerHTML = setConsistent(sec, 2);
      document.querySelector("#mil").innerHTML = setConsistent(mil, 3);
    }
  }, 50);
}

//Making the Numbers Consistent
function setConsistent(digits, len) {
  const str = String(digits);
  if (str.length === len) {
    return str;
  }
  if (len === 3) {
    if (str.length === 1) {
      return `00${str}`;
    } else if (str.length === 2) {
      return `0${str}`;
    }
  }

  if (len === 2) {
    if (str.length === 1) {
      return `0${str}`;
    }
  }
}
