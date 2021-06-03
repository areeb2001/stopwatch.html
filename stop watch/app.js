// function timer()
// {
//     console.log('hi')
// }
// setInterval(timer,1000)
 
// var count= 0 ;
// var inter ;
// function interval()
// {
//     count++
//     console.log(count)
// }
// inter = setInterval(interval,1000)
// function timeout()
// {
//     clearInterval(inter)
// }
// setTimeout(timeout,5000)
var min = 0;
var sec = 0;
var msec = 0;
var hrs = 0 ;
var minheading = document.getElementById('min');
var secheading = document.getElementById('sec');
var msecheading = document.getElementById('msec');
var hrsheading = document.getElementById('hrs');
var interval;
function timer()
{
    msec++;
    msecheading.innerHTML =msec;
    if(msec >= 100)
    {
        sec++;
        secheading.innerHTML = sec;
        msec = 0
    }
    else if(sec >= 60)
    {
       
            min++;
            minheading.innerHTML = min;
            sec =0;
        
    }
    else if(min >= 60)
    {
        hrs++
        hrsheading.innerHTML = hrs;
        min = 0;
    }
    else if(hrs >= 24)
    {
        hrs = 0;
    }
}
function start()
{
    interval = setInterval(timer,10);
   var disable = document.getElementById('disable');
   disable.disabled = true;

}
function stop()
{
    var disable = document.getElementById('disable');
    disable.disabled = false;
    clearInterval(interval);

}
function reset()
{
    hrs = 0 ;
    min= 0;
    sec = 0;
    msec= 0;
    hrsheading.innerHTML = hrs;
    minheading.innerHTML = min;
    secheading.innerHTML =sec;
    msecheading.innerHTML = msec;
    stop()

}