 
var flag=0;
var minutes=0,seconds=0;
var process=0;
$(function()
{
     
     $(".pic").click
     (
           function(e)
           {
                  checkAndMove(e);
           }
     )
     $("#startButton").click
     (
           function()
           {
                 start();
           }
      )
      $("#stopButton").click
      (
            function(e)
            {
                  stop(e);
            }
      )
     
})
function setTime()
{
      if(flag==1)
      {
            seconds++;
            if(seconds==60)
            {
                  seconds=0;
                  minutes++;
            }
      }
      if(seconds<10)
      $("#timeClock").html("time: "+minutes+":"+"0"+seconds);
      else
      $("#timeClock").html("time: "+minutes+":"+seconds);
}
function checkAndMove(e)
{
      if(flag==1)
      {
      var element=event.target;
      var currentNumber=$("#"+element.id).attr("number");
      var currentSpaceNumber=$("#space").attr("number");
      //alert(currentSpaceNumber+currentNumber);
      if(Math.abs(currentNumber-currentSpaceNumber)==4)
      moveFromTo($("#"+element.id),$("#space"));
      else if(Math.abs(currentNumber-currentSpaceNumber)==1)
      if(currentNumber%4==0&&(currentSpaceNumber)%4==3);
      else if(currentNumber%4==0&&(currentSpaceNumber)%4==3);
      else moveFromTo($("#"+element.id),$("#space"));
      process++;
      $("#step").html("steps: "+process);
      }
      if(checkForWin())
      {
            alert("you win!!!!!!!! its so amazing");
            flag=0;
            innitialize();
            clearInterval(clock);
      }
     // var temp=listOfPic[0];
      /*switch(currentNumber-currentSpaceNumber)
      {
            case -4:
                  var positionX=event.clientX
      }*/
}
function moveFromTo(pic_one,pic_two)
{

      if(!ElementIsInAnimated(pic_one.attr("id"))&&!ElementIsInAnimated(pic_two.attr("id")))
      {
          
            
     var leftDist=pic_two.offset().left-pic_one.offset().left;
     var topDist=pic_two.offset().top-pic_one.offset().top;
            pic_one.animate
      (
            {
            "left":"+="+leftDist,
            "top":"+="+topDist,
            },300
      )
      pic_two.animate
      (
            {
            "left":"+="+(-leftDist),
            "top":"+="+(-topDist),
            },300,
            function()
            {
                  var temp=pic_one.attr("number");
                  pic_one.attr("number",pic_two.attr("number"));
                  pic_two.attr("number",temp);
            }
      )
      }
}
function ElementIsInAnimated(id)
{  
      return $("#"+id).is(":animated");  
}  
  function checkForWin()
{
      var flag=1;
      var list=document.getElementsByClassName("pic");
      for(var i=0;i<16;i++)
      {
            if(list[i].number!=i)
            flag=0;
      }
      return flag;
}

function start()
{
      if(flag==0)
      {
            flag=1;
            innitialize();
            $("#startButton").html("gaming");
            var clock=setInterval(function(){setTime()},1000);
      }
      else if(flag==-1)
      {
            $("#startButton").html("gaming");
            $("#stopButton").html("its so hard i want to take a rest");
            flag=1;
      }
}
function stop(e)
{
      if(flag==1)
      {
            flag=-1;
            $("#startButton").html("restart");
            event.target.innerText="peeing";
      }
}
function innitialize()
{
      var list=document.getElementsByClassName("pic");
      moveFromTo($("#"+list[0].id),$("#"+list[1].id));
      moveFromTo($("#"+list[8].id),$("#"+list[4].id));
      moveFromTo($("#"+list[2].id),$("#"+list[14].id));
      moveFromTo($("#"+list[5].id),$("#"+list[12].id));
      moveFromTo($("#"+list[7].id),$("#"+list[11].id));
      moveFromTo($("#"+list[10].id),$("#"+list[13].id));
      $("#stopButton").html("its so hard let me pee first");
      $("#startButton").html("lets getting started");
}
//1 2 7 12 5 0 13 11 3 8 4 6 10 14 9 15