"use strict";
var initializeClock = function (identifier,endtime){
  var interval = setInterval(function(){
                    var formatted1 = getTimeRemaining(endtime);
                    if(!formatted1.error){
                        $(identifier).html("<span class='daysClass'>"
                        + formatted1.days+"</span> Days <span class='hoursClass'>"
                        + formatted1.hours+"</span> Hours <span class='minuteClass'>" 
                        + formatted1.minutes + "</span> Minutes <span class='secondClass'>" 
                        + formatted1.seconds +"</span> seconds Remaining");
                    }else{
                         clearInterval(interval);
                         $(identifier).html(formatted1.error);
                    }
                   
    
  },1000);
}
var getTimeRemaining = function (endtime){
  var difference = Date.parse(endtime) - Date.parse(new Date());
  var second = 1000,minute = second * 60,hour = minute * 60;
  var day = hour * 24;
  var days = padDigit(Math.floor(difference / day),2);
  var hours = padDigit(Math.floor((difference / hour) % 24),2);
  var minutes = padDigit(Math.floor((difference / minute)%60),2);
  var seconds = padDigit(Math.floor((difference / second) % 60),2);
  if(Date.parse(endtime) >= Date.parse(new Date())){
    return {
        "days": spanWrap(days),
        "hours": spanWrap(hours),
        "minutes": spanWrap(minutes),
        "seconds": spanWrap(seconds)
    };
  }else{
      return {
              "error":"out of time"
        }
  }
}
var spanWrap = function(digit){
  var digits = "";
  var i=0;
  digit = digit.toString();
  for(i=digit.length-1;i >= 0 ;i--){      
    digits ="<span>"+digit[i].toString()+"</span>"+digits;
  }
  return digits;
}
var padDigit = function (str, max) {
  str = str.toString();
  return str.length < max ? padDigit("0" + str, max) : str;
}