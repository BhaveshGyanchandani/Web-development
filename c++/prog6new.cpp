#include<iostream>
#include<string>
using namespace std;

void swap(int* a,int* b){
int c;
c=*a;
*a=*b;
*b=c;
}


int main(){

int x=4,y=3;

swap(&x,&y);
cout<<"the swaped value of x and y are "<<x<<","<<y;

    return 0;
}