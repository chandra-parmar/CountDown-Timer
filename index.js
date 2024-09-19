const EndDate = new Date("31 dec 2024  12:00:00").getTime();
const startDate = new Date().getTime();

//update timer function





//calling every second updatetimer function
let x= setInterval(function updateTimer()
{
    const now = new Date().getTime();

    const distanceCoverd = now - startDate;
   //time left distpending
    const distancePending= EndDate- now;
    
    //calculate days,min,hrs,secs
    // 1 day= 86400000 milisec(24 hrs*60min*60sec*1000ms)
    
    const days = Math.floor(distancePending/(24*60*60*1000));
    const hrs= Math.floor(distancePending%((24*60*60*1000)/(60*60*1000)));
    const mins=Math.floor((distancePending%(60*60*1000))/(60*1000));
    const secs=Math.floor((distancePending%(60*1000))/(1000));
//
   //populate on ui
   document.getElementById("days").innerHTML= days;
   document.getElementById("hours").innerHTML= hrs;
   document.getElementById("min").innerHTML= mins;
   document.getElementById("sec").innerHTML= secs;


  //calculating width percentage
  const totalDistance = EndDate- startDate;

  const percentageDistance =(distanceCoverd/totalDistance)*100;

  document.getElementById("progress-bar").style.width =percentageDistance+"%";

    // if days are in negative
    if(distancePending<0)
    {
        clearInterval(x);
        document.getElementsById("countdown").innerHTML ="EXPIRED";
        document.getElementById("progress-bar").style.width ="100%";
    }

}
,1000);
