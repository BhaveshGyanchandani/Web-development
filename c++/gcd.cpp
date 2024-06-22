#include <iostream>
using namespace std;


int main()
{
  int a,b,max,store;
  cout<<"enter 2 number to print gcd of : "<<endl;
  cin>>a;
  cout<<endl;
  cin>>b;
   if(a>b){
    max=a;
   }
   else{
    max=b;
   }
for(int i=1; i<max+1 ;i++){

    if( a%i==0 && b%i==0 ){
        store=i;
    }
}
cout<<"the gcd of a and b is : "<<store<<endl;
    return 0;
}