#include<iostream>
#include<string>//to use more function in string
using namespace std;
int main(){
string name="harry";
cout<<"the name is "<<name<<endl;
cout<<"the length of string is "<<name.length()<<endl;
cout<<"the length of string is "<<name.substr()<<endl;
cout<<"the length of string is "<<name.substr(0,3)<<endl;//will strat the string form 0 index to 2 index like a[3]is upto 2 index
cout<<"the length of string is "<<name.substr(1,3)<<endl;
return 0;
    
}