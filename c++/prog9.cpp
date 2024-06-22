#include <iostream>
#include <string>
using namespace std;

class num2;
class num1{
int a;
public:
int x;
friend class num2;
void setnuma(){
    
    cout<<"enter the no. : "<<endl;
    cin>>x;
    a=x;
}
int getnuma(){
    return a;
}
};

class num2{
int b;
public:
int y;
friend class num1;
void compare(num1 c,num2 d);

void setnumb(){
    
    cout<<"enter the no. :"<<endl;
    cin>>y;
    b=y;
}

int getnumb(){
    return b;
}
};

void num2 :: compare(num1 c,num2 d){
    if(c.getnuma()>d.getnumb()){//c ke andr getnuma() ki jo value hai use lo 
        cout<<c.a<<"is big"<<endl;
    }
    else if(c.a==d.b){//c ke andr a ki value ko do as we cannot write a directly bcz c object has value of a and d object has value of b sic eboth are member variables
        cout<<"both are same";
    }
    else if(c.x<d.y){////c ke andr x ki value ko do as we cannot write a directly bcz c object has value of x and d object has value of y since x nd y both are membem variables
    cout<<"b is big"<<endl;
    }
}


int main()
{
num1 c;
num2 d;
c.setnuma();
d.setnumb();

d.compare(c,d);

    return 0;
}