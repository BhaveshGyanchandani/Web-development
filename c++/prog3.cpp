#include<iostream>
#include<string>
using namespace std;
int main(){
    int i;
string name[10];
for( i=0;i<5;i++){
    cout<<"enter the city name :";
    cin>>name[i];
}
for(i=0;i<5;i++){
    cout<<name[i]<<endl;

}

    return 0;
}