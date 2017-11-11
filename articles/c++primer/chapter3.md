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