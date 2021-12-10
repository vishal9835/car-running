m=0;
var y;
function start()
{
    y=setInterval(run,100);
    function run()
    {
        if(m==1200)
        {
          clearInterval(y);
          m=0;
        }
        else{
        m+=5;
        var x=document.getElementById("img");
        x.style.marginleft=m+'px';
    }
}
}
function stop()
{
    clearInterval(y)
}