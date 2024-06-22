#include<iostream>
using namespace std;
int add(int a,int b){
    int c;
    c=a+b;
    return c;
}
int main(){
    int a,b;
cin>>a;
cin>>b;
cout<<"sum of a and b is " <<add(a,b);
return 0;
    
}