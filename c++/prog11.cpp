#include <iostream>
#include <string>
using namespace std;

class data{
    public:
    int a,b;
    void setdata(){
        int x,y;
        cout<<"enter the number x and y : ";
        cin>>x>>y;
        a=x;
        b=y;
    }
};

class maximum : public data{
public:
void process(data c,data d){
    if(c.a>d.b){
        cout<<"x is big "<<endl;
    }
    else{
        cout<<"y is big ";
    }

}
};
int main()
{
   
 maximum max;
 max.setdata();
 max.process(max,max);
    return 0;
}