#include <iostream>
#include <string>
using namespace std;

class num1{
int a;
public:
void setnuma(int x){
    a=x;
}
int getnuma(void){
    return a;
}

};

class num2{
int b;
public:
void setnumb(int y){
    b=y;
}
int getnumb(void){
    return b;
}

};

class mult : public num1,public num2{
int c;
public:
void prod(num1 d,num2 e){
 int res;
 res=getnuma()*getnumb();
//  res=a*b;
cout<<"the product of a and b is "<<res;

}
};

int main()
{
  mult f;
  f.setnuma(3);
  f.setnumb(4);
f.prod(f,f);

    return 0;
}

