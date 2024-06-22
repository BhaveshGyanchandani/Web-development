#include <iostream>
#include<cmath>
#include <string>
using namespace std;

class area{

    float x,y,z;
    public:
    area(){x=0;y=0;
    cout<<"area is 0:";}
    area(float length,float breadth){
        float Area;
        x=length;
        y=breadth;
        Area=x*y;
        if(x==y==length==breadth){
            Area=x*x;
        cout<<"the area square is : "<<Area<<endl;
        }
        else{
            Area=x*y;
            cout<<"the area rectangle is : "<<Area<<endl;
        }
    }
    area(float radius){
        float Area;
        x=y=radius;
        Area=3.14*x*x;
        cout<<"the area of circle is : "<<Area<<endl;
    }
    area(float a,float b,float c){
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

int main()
{
    // float a,b,c,d,e,f,g,h;
    // cin>>a>>b>>c>>d>>e>>f>>g>>h;
area square(1,1);
area reactangle(2,3);
area circle(4);
area triangle(3,4,5);
  
// float a,b,c;

    return 0;
}