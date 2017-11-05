var flagForStartOrStop=0;
window.onload=function()
{
    initialize();
    document.getElementById("startButton").onclick=start;
    setTime();
    document.getElementById("gameArea").addEventListener("click",check);
}


var initialize=function()
{
    for(var i=0;i<6;i++)
    {
        var j=0;
        for(var j=0;j<10;j++)
        {
            var element=document.createElement("div");
            element.style.display="inline-block";
            element.className="moles";
            element.id=i*10+(j+1);
            document.getElementById("gameArea").appendChild(element);
        }
        var breakLine=document.createElement("br");
        document.getElementById("gameArea").appendChild(breakLine);
    }
   // alert("if you ready for the game,hit the ok button");
}
var start=function()
{
    
   if(flagForStartOrStop==0)
    {
        document.getElementById("gameOver").value="Playing";
        setRandom();
        flagForStartOrStop=1;
    }
   else if(flagForStartOrStop==1)
    {
        document.getElementById("gameOver").value="Stop";
        flagForStartOrStop=3;
    }
    else if(flagForStartOrStop==3)
    {
        document.getElementById("gameOver").value="Playing";
        flagForStartOrStop=1;
    }
}
var setTime=function()
{
    var idForClock=setInterval(function()
    {
        
        var element=document.getElementById("time");
        if(parseInt(element.value)>=30)
        {
            clearInterval(idForClock);
            end();
        }
        if(flagForStartOrStop==1)
        {
            document.getElementById("time").value=parseInt(document.getElementById("time").value)+1;
        }
    },1000);
}
var setRandom=function()
{
    var id=Math.floor(Math.random()*60);
    //alert(id);
    document.getElementsByClassName("moles")[id].className+=" theChosenOne";
}
function check(event)
{
    if(flagForStartOrStop==1)
    {
        var element=event.target;
        if(element.id==document.getElementsByClassName("theChosenOne")[0].id)
        {
            document.getElementById("score").value=parseInt(document.getElementById("score").value)+1;
            document.getElementsByClassName("theChosenOne")[0].className="moles";
            setRandom();
        }
        else if(element.id>=0&&element.id<60)
        {
            document.getElementById("score").value=parseInt(document.getElementById("score").value)-1;
        }
    }
}
function end()
{
    alert("your score is"+ document.getElementById("score").value);
    document.getElementById("gameOver").value="game over"
    flagForStartOrStop=0;
    document.getElementsByClassName("theChosenOne")[0].className="moles";
    document.getElementById("score").value="0";
    document.getElementById("time").value="0";
}