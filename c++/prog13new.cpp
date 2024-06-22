#include <iostream>
#include <string>
using namespace std;

class num1{
public:
int a;
void setnuma(){
    int x;
    cin>>x;
    a=x;
}
int getnuma(void){
    return a;
}

};

class num2{
public:
int b;
void setnumb(){
    int y;
    cin>>y;
    b=y;
}
int getnumb(void){
    return b;
}

};

class mult : public num1,public num2{
int c;
public:
// void prod(num1 d,num2 e){
//  int res;
//  res=(d.a*e.b);
// //  res=a*b;
// cout<<"the product of a and b is "<<res;

// }
mult(){}
mult(num1 d,num2 e){
    int res;
    res=d.a*e.b;
    cout<<"product is : "<<res;
}
};

int main()
{
  mult f;
  f.setnuma();
  f.setnumb();
// f.prod(f,f);
mult(f,f);
    return 0;
}