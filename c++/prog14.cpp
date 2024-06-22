#include <iostream>
#include <string>
using namespace std;

class person{
public:
string name;
int age;
void setname(string a){
name=a;
}
void setage(int a){
age=a;
}

};

class student : public virtual person{
public:
int standard;
void grade(int a){
    standard=a;
}
void displayS(void){
    cout<<name<<" "<<age<<" standard is : "<<standard<<endl;
}
};

class teacher : public virtual person{
public:
string post;
void seat(string s){
    post=s;
}

void displayT(void){
    cout<<name<<" "<<age<<" post is : "<<post<<endl;
}
};


int main()
{
 teacher t1;
 student s1;
 t1.setname("harry");
 t1.setage(45);
 t1.seat("principle");

 s1.setname("rohan");
 s1.setage(15);
s1.grade(10);

 t1.displayT();
 s1.displayS();
    return 0;
}
