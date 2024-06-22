    
    
#include<iostream>
#include<string>
using namespace std;

int main(){
    int j,i;
    int temp;
string name;
for( i=0;i<5;i++){
    cout<<"enter the city name :";
    cin>>name;
}
for(i=0;i<5;i++){

if(name[i]>name[i+1]){
    name[i]=temp;
    name[i+1]=name[i];
    temp=name[i+1];
    cout<<name[i]<<endl;
}

}

for(i=0;i<5;i++){
    cout<<name<<endl;

}

// sort(name);

    return 0;
}