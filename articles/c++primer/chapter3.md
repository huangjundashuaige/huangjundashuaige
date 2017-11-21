#c++primer chapter3
因为如果我用英文写的话自己实在不会去看所以看是算了吧哈哈哈
but for the input method of my ubuntu was so so bad i still have to do it in english
so today's problem is that according to chapter1,the transition from int to unsigned in the expression maybe a very serious problem for the primer concern of c++ basic data type shoudle try his best not to lose information so when a int data(it doesnt matter if it is a literal or just a identifier) have the arithmetic relation with usigned data it must translate into unsinged for its protential of losing information for unsigned data translate into int,but we dont usually notice that because it will get over the maxmun of usined when they doing like 2 + (-1),which -1 gets to max-1 and then +2 and you get 1.
```
#include<string>
#include<iostream>
using namespace std;
int main()
{
    string s("abc");
    auto lenth=s.size();
    cout<<lenth<<endl;
    int n=-2;
    unsigned int n2=2;
   unsigned long lenth2=n2+n-1;
    cout<<lenth2<<endl;
    cout<<static_cast<unsigned long>(-1)<<endl;
    bool result=(s.size()<-1);
    cout<<result<<endl;
    bool result2=(static_cast<int>(s.size())<-1);
    cout<<result2<<endl;
    return 0;
}
```
and the result is 
3
4294967295
18446744073709551615
1
0
but i dont think it will do lot damage for acutually the problem use a temperary variable for stroging the result of expression and you will get a 1,
the potential danger may only appear in the compare expression i guess.

##next day
the expression of assigning returns a reference but no name and is a lvalue

#many days later
question remain what on earth did a  c++ code will raise a exception (and if they do is the exception is standard of its not standard) my point is that it will raise a standard exception but i failed to find a correct example.
------
part of new knoledge 
1. you can only creat a list para for multi demention array but doing int arr[][length] and it will be wrong if you use int** arr which confuse me because you can use int * equal to int [] or int arr[]? my view is that multi dem array is array for arrray and you have to make sure it spacerange for accessing then so you will have make the second dem clear for the compiler for your later use.
2. auto cannot recognize int[] and int& but decltype can
3. only c style string will end with a '\0' for sympol of string when you read the char* it will end by reco the '\0' but c++ you will not worry about it at all you can just ` string s("whatev") ` or ` char arr[3]="12" `and "12" has the length of 3 the '\0' was auto include  for the inher with c.but if you assign to string standard it will ingorne the '\0'. its so misrable for new learner. and interferce for vector is that ` vector v(begin(arr),end(arr)) ` begin()and end() glo function will offer buy iostream for convinent but it can only use for arr which it length is part of its name and when you pass it to fucntion like ` int* ` it will lost its info about length and if you list like ` int arr[3] ` the it will be good to limit you access by your compile like straight arr[5] accessing but dynamic? whatev.
