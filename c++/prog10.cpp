#include <iostream>
#include <string>
using namespace std;

class count{
static int number;
int id;
public:
void setdata(){
    cout<<"enter the id :"<<endl;
    cin>>id;
    number++;
}
void getdata(){
    cout<<"the id of employee is : "<<id<<" and its position number is :"<<number<<endl;
    }
    void display(){
        cout<<"the total number of objects created are : "<<number;
    }
};
int count :: number;
int main()
{
 count a;
 int size;
 cout<<"enter the number of members to insert : "<<endl;
 cin>>size;
for(int i=0;i<size;i++)
{
     a.setdata();
    a.getdata();
     }
     a.display();

    return 0;
}