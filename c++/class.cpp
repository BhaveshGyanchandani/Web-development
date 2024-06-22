#include <iostream>
#include <string>
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



int main()
{
 
    return 0;
}