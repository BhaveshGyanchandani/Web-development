#include<iostream>
using namespace std;
int main(){
//     int a[3]={1, 2, 3};
//     cout<<"the array is  "<<a[0]<<endl;

//     // for(int b=0;b<5;b++){
//     //     cout<<"the value "<<b<<"th digit of array is "<<b+1<<endl;
//     // }
// int c[5];
//     for(int i=0;i<5;i++){
        
//         cout<<"enter the marks of "<<i<<"th student ";
//         cin>>c[i];
//     }
//     for(int i=0;i<5;i++){
//     cout<<"the marks of "<<i<<"th student is "<<c[i]<<endl;
//     }

int arr2d[2][3];
for(int i=1;i<2;i++){
    for(int j=1;j<3;j++){
        cout<<"enter the value of "<<i<<"th"<<","<<j<<"th"<<" valaue of matrix "<<endl;
        cin>>arr2d[i][j];
        
    }
}
 for(int i=1;i<2;i++){
    for(int j=1;j<3;j++){
 
        cout<<"the value of "<<i<<"th"<<","<<j<<"th"<<" valaue is "<<arr2d[i][j]<<endl;
    }
}   
for(int i=1;i<2;i++){
    for(int j=1;j<3;j++){
 
        cout<<arr2d[i][j];
    }
    cout<<endl;
}  
cout<<arr2d[2][3];
  return 0;  
}