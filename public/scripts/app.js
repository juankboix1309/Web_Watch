

var AnalogClock = document.getElementById("analogClock");
var myElementSecs = document.getElementById("agujasegundos");
var myElementMins = document.getElementById("agujaminutos");
var myElementHrs = document.getElementById("agujahora");
var cantSecs = 0;
var cantMins = 0;
var cantHrs = 0;
var DigitalClock = document.getElementById("digitalClock");
var degreesSecs = 270+(cantSecs*6);
var AnalogOrDigital = 0;
var degreesMins = 270+(cantMins*6);
var degreesHrs = 270+(cantHrs*6);
var clockSelect = document.getElementById("kind-of-clock");

clockSelect.addEventListener("change", function(){
  if(clockSelect.value === "analog")
  {
    AnalogOrDigital = 0;
  }
  else if (clockSelect.value === "digital") 
  {
    AnalogOrDigital = 1;
  }
})

function myTimeoutFunction()
{
  if(AnalogOrDigital === 0)
  {
    AnalogClock.style.opacity = 1;
    DigitalClock.style.opacity = 0;
  }
  if(AnalogOrDigital === 1)
  {
    AnalogClock.style.opacity = 0;
    DigitalClock.style.opacity =  1;
  }

  myElementSecs.style.transform = 'rotate('+degreesSecs+'deg)';
  degreesSecs = degreesSecs+6;
  if(cantSecs === 60)
  {
    
    degreesMins = degreesMins+6;
    myElementMins.style.transform = 'rotate('+degreesMins+'deg)';
    cantMins=cantMins+1;
    cantSecs=0;
  }
  if(cantMins === 60)
  {
    
    degreesHrs = degreesHrs+30;
    myElementHrs.style.transform = 'rotate('+degreesHrs+'deg)';
    cantMins = 0;
    cantHrs = cantHrs + 1;
  }
  if(cantHrs === 24)
  {
    cantHrs = 0;
  }
  cantSecs = cantSecs+1;
  DigitalClock.innerHTML = cantHrs+":"+cantMins+':'+cantSecs;
}

myTimeoutFunction();
setInterval(myTimeoutFunction, 10)


