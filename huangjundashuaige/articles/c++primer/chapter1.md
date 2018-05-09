# chapter one of c++primer
first thing first,i have read the first few chapters of this book many month ago.And when i acutually need to take serious about the work im doing.I came to realize that im still having lots of troubles with c++.So thanks to the chance that my school let me have a full nine day holiday,so I think why not just reread the whole book again.
---
## page 41
as far as i know just before this evening,
i still think declaration was just like 
<br>
`int a`
<br>
and definition was like
<br>
`int a=1`
<br>
but i do know the difference between function declaration and definition and these two things are compelely different,so i was a little confuse backthen.but after reading this part of passage,**i do konw that the declaration and defintion between function and variable are a acutually the same.**(by the way it also meet the will that all variable no matter which class it is they all are object.)
and function declaration which i familiar with which is also known to us is
<br>
`int calculator(int a,int b);`
it has a straight ´;´ in its end,and the functionality of this kind of action is to provide a function interface to let the rest of code int the same file (or if its a headfile,its to let the main file and the file which include beneth it knows that the function which was named this way was declared and you can use it,and by the way you use the function ,it provide the interface to the real defintion of this function which show the functionality of this function if it acutually defined).so basically the declaration for variable was the same to function,it can let the rest of code konws and can use the variable,
-----
declaration is auctually like 
` extern int n `
it means you can let the rest code between decl and def knows you have decl a varia and you can access it by going throught rest part of code(no matter its pallor like differen files and you will decl it and it will ref automatically to other file or have its sequence order like normal code and you just put it up a little bit)
##update 
so so wrong extern int just like a access help you find the def int the later same file or other file for its def you can use extern in function body but the def must be a global variable because if its a auto variable its 作用域   cannot affect other files. the value of extern use will depend on the instruction in sequence just like in the same file but differen function
---
and **for it can multiplly declared the purpose of this kind design is for coder can easily know which variable he can use by only checking the head part of the code file,no need to look throught all these file.**
<br>as for you can only defined a variable once it can reduce the risk of cover the previous variable you might want to use next which can contribute to lots problem.by the way it can work if you can define variable mutiple times in the different file which were linked together
-----
update:i was so naive about link different cpp file together back when i writing this blog ,i now knows that the link of cpp files doesnt just like sewing the files at the order of your using g++ compiler (this mean is a little bit like the cover of local variable loacl **the design of local variable seems still has a bit confusion for me**,i guess it for the space for you can release the space of the local variable so you can dont give a shit about whether it cover the upper variable?)but it just reduce the flexibility and usage of head file main file design.
-----
last for today i want to put some note of use method of static variable
[reference](./reference.md)
or
[global link](http://huangjundashuaige/articles/c++primer/reference)
the thing need to be remeber is static symbol is to limit the scope(作用域) of the variable(static groble for its origin file and static loacl was it function scope and you can access it just like grobal variable but only through the function which declare it or you can pass a reference like `int& function(){}` to make a copy(which the copy was actully declared int the ouside block so thanks to the 上下文 you can acess the copy which means you can acess the origin variable directly) )(and althrough the grobal variable´s scope is grobal you have to add extern in the file before this file was include just to let the rest code know there exsit such variable) and has nothing to do with the specific memeory storage like heap-stack and static normal memory device,and only auto variable also known as local variable was stored in heap-stack the other three grobal,static grobal,static local were all store in static memory.and loacl variable will be release after the single call of the function.attention:**the most important part of the note usage is to know that if you want to use a loacl variable´s number it will be fine for static or not because it´number can return by function through pass by value.but if you want to reall use in late and has something to do with its functionality or you will change it next time before it appear again,you must add the static symbol before its declaration and pass it by pointer or reference,or you will get a worng ptr for the space it point to has already be wiped up. 
-------
##update after a project of datastru
well i finally knows the difference between hpp and .h headfile,hpp has the declaration and defination of all classes,and you can and only has one opprtunity to include the hpp file in you main cpp file(the reason is the #include marco instruction is that include all you coding in the file(if its hpp then it can only be main cpp fike or another hpp file but include in main cpp file and espeacilly you only include once no matter how deep the hpp file could be and how mislable it can confuse you when you accidently include the defination twice)( **because the defination is open another memory space for object(variable or class) if you have a redif it can mislead the rest code (cause the variable name is actully ref to index of space or you can say its just the index of space) by make them dont know which index of space to ref to)**)
-------
and .h headfile can only have declaration and so it can be include many times you need and its functionality is to make the rest of code of the including file can recongize the class so it can look throught other cpp file for its def. and the tradition its to make the def of .h file in the cpp file which has the same name with the .h file and you will have to add them in your g++ command of it will autoamtically compile when you storage them in the same folder with you main cpp file when you using a IDE.
