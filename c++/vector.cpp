#include<iostream>
#include<vector>
using namespace std;
void display(vector<int> &v){
for(int i=0;i<4;i++){
cout<<v[i]<<"  ";
}
cout<<endl;
}

int main(){
vector<int> v1;
int pop;
int element;
for(int i=0;i<4;i++){
    cout<<"enter element :";
    cin>>element;
    v1.push_back(element);
}
// display(v1);
// cout<<"enetr element to p    op ";
// cin>>pop;
v1.pop_back();
display(v1);
    return 0;
}