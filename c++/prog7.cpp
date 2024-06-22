#include <iostream>
#include <string>
using namespace std;

class point{

    int x,y;
    public:
    point(){x=0;y=0;}
    point(int a,int b){
x=a;
y=b;
    }
    point(point &c){
x=c.x;
y=c.y;
    }

void display(){
    cout<<"the value of coordinates x and y are :"<< "("<<x<<","<<y<<")"<<endl;
}
};

int main()
{
point p1(1,2);
p1.display();
   
   point p2;
   p2.display();

   point p3(p1);
   p3.display();

    return 0;
}


 
  