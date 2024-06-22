#include<iostream>
using namespace std;
int main(){
    int z;
cout<<"enetr the no.";
cin>>z;//used to input data form user
cout<<"your age is "<<z ;
if(z>18){
    cout<<"eligible"<<endl;
}
else if(z=18){
    cout<<endl<<"eligible";
}
else{
    cout<<endl<<"not eligible";
}
int age;
cin>>age;
switch (age)
{
case 18:cout<<endl<<"your age is 18";break;
case 12:cout<<endl<<"age is 12";break;
default:cout<<endl<<"neither 12 or 18";break;
}

return 0;
}