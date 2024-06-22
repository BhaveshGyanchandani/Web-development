#include <iostream>
#include <string>
#include<cmath>
using namespace std;


class square{
public:
int side2;
square(){}
square(int a){
side2=a;
int area=side2*side2;
cout<<"the area of square is "<<area<<endl;
}

};

class triangle{
    public:
    int x,y,z;
    triangle(){}
    triangle(int a,int b,int c){
 x=a;
        y=b;
        z=c;
        float semi=float(x+y+z)/2;
        float Area=(semi)*(semi-x)*(semi-y)*(semi-z);;
        // cout<<semi;
        Area= float(sqrt(Area));
        cout<<"the area of triangle is : "<<float(Area)<<endl;
    }

};


class shape : public triangle,public square{
public:
string name;
int a;
int setint(){
    cout<<"set the integer :"<<endl;
    cin>>a;
}
int getint(){
    return a;
}
shape(){}
shape(int& side){
    int b;
    b=side;
          square(b);
}

  shape(int a,int b,int c){
          triangle();
  }

};

int main()
{int *side1,side2,side3,side4;
cout<<"enter the 4 sides first side for square and other for triangle : "<<endl;
cin>>*side1>>side2>>side3>>side4;
 shape s1=shape(*side1);

// s1.setint();
// s1=shape(s1.setint());
 shape s2=shape(side2,side3,side4);
    return 0;
}