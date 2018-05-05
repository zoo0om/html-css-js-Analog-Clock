// Set the Clock Hands to Constants to select them later easly
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


  //Get Real time
  var date = new Date();

  //set Date to variables
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  //Set time values so we can manipulate them later and automate the process using CSS
  let hrPosition = (hour*360/12) + (minute*(360/60)/12);
  let minPosition = (minute*360/60) + (second*(360/60)/60);
  let secPosition = second*360/60;



function runTheClock() {
  
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    //Edit the CSS to move the hands
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//set interval ro load the function each 1000 millisecond
var interval = setInterval(runTheClock, 1000);