#include <iostream>
#include <string>
using namespace std;

class student{
public:
char name[100];
int roll_no;
void setname();
void setroll_no();
};
void student :: setroll_no()
    {
    cout<<"enter the roll number of student : ";
    cin>>roll_no;
}
void student::setname(){
    {
    cout<<"enter the name : ";
    cin>>name;
}
}
class test : public student{
public: 
int marks1,marks2;
void setmarks();

};
void test :: setmarks(){
    cout<<"enter marks of subject1 and subject2 : "<<endl;
    cin>>marks1;
    cout<<"  ";
    cin>>marks2;
}

class result : public test{
public:
int result;
void setresult();
int getresult(void);
void display();
};
void result :: display(){
     cout<<"the name , roll no. , marks of subject1 and subject 2 , and their total is : "<<name<<","<<"roll no. is "<<roll_no<<" , mark of subject1 "<<marks1<<" , marks of subject2 is  "<<marks2<<" and their total is "<<(marks1+marks2)<<endl;

     cout<<"total is : "<<getresult();
    }
    int result :: getresult(){
        return (marks1+marks2);
    }
int main()
{
    result r1;
int size;
cout<<"enter the number of students : ";
cin>>size;
   for(int i=0;i<size;i++){
     r1.setname();
    r1.setroll_no();
    r1.setmarks();
r1.display();
   }
   
    return 0;
}