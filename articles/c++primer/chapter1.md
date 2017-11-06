# chapter one of c++primer
first thing first,i have read the first few chapters of this book many month ago.And when i acutually need to take serious about the work im doing.I came to realize that im still having lots of troubles with c++.So thanks to the chance that my school let me have a full nine day holiday,so I think why not just reread the whole book again.
---
## page 41
as far as i know just before this evening,
i still think declaration was just like 
<br>
` int a `
<br>
and definition was like
<br>
`int a=1`
<br>
but i do know the difference between function declaration and definition and these two things are compelely different,so i was a little confuse backthen.but after reading this part of passage,**i do konw that the declaration and defintion between function and variable are a acutually the same.**(by the way it also meet the will that all variable no matter which class it is they all are object.)
and function declaration which i familiar with which is also known to us is
<br>
`int calculator(int a,int b);`
it has a straight ´;´ in its end,and the functionality of this kind of action is to provide a function interface to let the rest of code int the same file (or if its a headfile,its to let the main file and the file which include beneth it knows that the function which was named this way was declared and you can use it,and by the way you use the function ,it provide the interface to the real defintion of this function which show the functionality of this function if it acutually defined).so basically the declaration for variable was the same to function,it can let the rest of code konws and can use the variable,and **for it can multiplly declared the purpose of this kind design is for coder can easily know which variable he can use by only checking the head part of the code file,no need to look throught all these file.** as for you can only defined a variable once it can reduce the risk of cover the previous variable you might want to use next which can contribute to lots problem.by the way it can work if you can define variable mutiple times in the different file which were linked together (this mean is a little bit like the cover of local variable loacl *the design of local variable seems still has a bit confusion for me,i guess it for the space for you can release the space of the local variable so you can dont give a shit about whether it cover the upper variable?)but it just reduce the flexibility and usage of head file main file design.
***
last for today i want to put some note of use method of static variable
[reference](./reference.md)
or
<a  href=¨http://huangjundashuaige/articles/c++primer/reference.md¨>grobal link</a>
the thing need to be remeber is static symbol is to limit the scope(作用域) of the variable(static groble for its origin file and static loacl was it function scope and you can access it just like grobal variable but only through the function which declare it)(and althrough the grobal variable´s scope is grobal you have to add extern in the file before this file was include just to let the rest code know there exsit such variable) and has nothing to do with the specific memeory storage like heap-stack and static normal memory device,and only auto variable also known as local variable was stored in heap-stack the other three grobal,static grobal,static local were all store in static memory.and loacl variable will be release after the single call of the function.attention:**the most important part of the note usage is to know that if you want to use a loacl variable´s number it will be fine for static or not because it´number can return by function through pass by value.but if you want to reall use in late and has something to do with its functionality or you will change it next time before it appear again,you must add the static symbol before its declaration and pass it by pointer or reference,or you will get a worng ptr for the space it point to has already be wiped up. 