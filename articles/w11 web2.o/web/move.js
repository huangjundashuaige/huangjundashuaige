 
var flag=0;
var flagForClock=0;
var minutes=0,seconds=0;
var process=0;
var flagForAdvanture=0;
var flagForGodMod=0;
var firstPick=1;
var firstGodMod=1;
$(function()
{
      $(".pic").each
      (
            function(i)
            {
                  $(this).attr("number",i);
            }
      )
      $("#godMod").click
      (
            function()
            {
                  if(firstGodMod==1)
                  {
                  alert("you can select two pic in order,then it will switch their position just like 消消乐");
                  firstGodMod=0;
                  }
                  else
                  {
                  if(flagForGodMod==0)
                  {
                        flagForGodMod=1;
                        $(this).html("God Mod :ON");
                  }
                  else if(flagForGodMod==1)
                  {
                        flagForGodMod=0;
                        $(this).html("God Mod :OFF");
                  }
                  }
            }
      )
      $("#advanture").click
      (
            function()
            {
            if(flagForAdvanture==0)
            {
            alert("once you press the advanture button,there will have a random number of picture change its position with the white space"
      +"it can make the most distubing picture get right where it belong or it can make your situation worse,its all up to you,be wise young man");
            flagForAdvanture=1;
            }
            else if(flag==1)
            randomExchange();
            }
      )
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
     $("#startOverButton").click
     (
           function()
           {
                 startOver();
                 
           }
     )
})
function randomExchange()
{
      var number=Math.floor(Math.random()*16);
      var list=$(".pic");
      moveFromTo($("#"+list[number].id),$("#space"));
}
function startOver()
{
    
      flag=0;
      //clearInterval(clock);
      minutes=0;
      seconds=0;
      $("#timeClock").html("time: "+"0"+":"+"00");
      $("#step").html("steps: "+"0");
      $("#startOverButton").css
      (
            {
                  "visibility":"hidden",
            }
      )
      $("#stopButton").html("its so hard let me pee first");
      $("#startButton").html("lets getting started");
      $(".pic").each(
            function(i)
            {
                  $(this).animate(
                                    {     
                                          "top":"0",
                                          "left":"0",
                                    }
                  ,300)
                  $(this).attr("number",i);
      }
      )
}
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
function godModCheckAndMove(e)
{
      var element=event.target;
      if(firstPick==1)
      {
            firstDiv=$(element);
            firstNum=$("#"+element.id).attr("number");
            $("#"+element.id).animate
            (
                  {
                        "border-radius":"30px",
                  },300
            )
            firstPick=0;
      }
      else if(firstPick==0)
      {
            $(element).animate
            (
                  {
                        "border-radius":"30px",
                  },1
            )
            secondNum=$(element).attr("number");
            setTimeout(
                  function()
                  {
            moveFromTo(firstDiv,$(element));
                  },300
            );
            setTimeout(
                  function()
                  {
                        
            firstDiv.animate
            (
                  {
                        "border-radius":"0",
                  },300
            );
            $(element).animate
            (
                  {
                        "border-radius":"0",
                  },300
            )
            },300);
            firstPick=1;

      }
      
}
function checkAndMove(e)
{
      if(flag==1)
      {
      var element=event.target;
      if(flagForGodMod==1)
            godModCheckAndMove(event);
      else
      {
      var currentNumber=$("#"+element.id).attr("number");
      var currentSpaceNumber=$("#space").attr("number");
      //alert(currentSpaceNumber+currentNumber);
      if(Math.abs(currentNumber-currentSpaceNumber)==4)
      moveFromTo($("#"+element.id),$("#space"));
      else if(Math.abs(currentNumber-currentSpaceNumber)==1)
      if(currentNumber%4==0&&(currentSpaceNumber)%4==3);
      else if(currentNumber%4==0&&(currentSpaceNumber)%4==3);
      else moveFromTo($("#"+element.id),$("#space"));
      }
      process++;
      $("#step").html("steps: "+process);
      }
      /*setTimeout(
            function()
            {
      if(checkForWin()==1&&flag==1)
      {
            alert("you win!!!!!!!! its so amazing");
            flag=0;
            $("#stopButton").html("its so hard let me pee first");
            $("#startButton").html("lets getting started");
            flagForClock=0;
            minutes=0;
            seconds=0;
            $("#timeClock").html("time: "+"0"+":"+"00");
            $("#step").html("steps: "+"0");
      }
      },300);*/
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
            if(checkForWin()==1&&flag==1)
            {
                  alert("you win!!!!!!!! its so amazing");
                  flag=0;
                  $("#stopButton").html("its so hard let me pee first");
                  $("#startButton").html("lets getting started");
                  flagForClock=0;
                  minutes=0;
                  seconds=0;
                  $("#timeClock").html("time: "+"0"+":"+"00");
                  $("#step").html("steps: "+"0");
                  $("#startOverButton").css
                  (
                        {
                              "visibility":"hidden",
                        }
                  )
            }
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
      var list=$(".pic");
      for(var i=0;i<16;i++)
      {
            if($(list[i]).attr("number")!=i)
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
            $("#startOverButton").css
            (
                  {
                        "visibility":"visible",
                  }
            )
            if(flagForClock==0) 
            {
                  var clock=setInterval(function(){setTime()},1000);
                  flagForClock=1;
            }
      }
      else if(flag==-1)
      {
            $("#startButton").html("gaming");
            $("#stopButton").html("its so hard i want to take a rest");
            flag=1;
            $("#startOverButton").css
            (
                  {
                        "visibility":"visible",
                  }
            )
      }
}
function stop(e)
{
      if(flag==1)
      {
            flag=-1;
            $("#startButton").html("continue");
            event.target.innerText="peeing";
      }
}
function innitialize()
{
      var list=document.getElementsByClassName("pic");
      /*moveFromTo($("#"+list[0].id),$("#"+list[1].id));
      moveFromTo($("#"+list[8].id),$("#"+list[4].id));
      moveFromTo($("#"+list[2].id),$("#"+list[14].id));
      moveFromTo($("#"+list[5].id),$("#"+list[12].id));
      moveFromTo($("#"+list[7].id),$("#"+list[11].id));
      moveFromTo($("#"+list[10].id),$("#"+list[13].id));*/
      for(var i=0;i<Math.random()*100+20;i++)
      {
            moveFromTo($("#"+list[Math.floor(Math.random()*15)].id),$("#"+list[Math.floor(Math.random()*15)].id))
      }
      $("#stopButton").html("its so hard let me pee first");
      $("#startButton").html("lets getting started");
}
//1 2 7 12 5 0 13 11 3 8 4 6 10 14 9 15
