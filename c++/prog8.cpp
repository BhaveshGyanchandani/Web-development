#include <iostream>
#include <string>
using namespace std;

class dest{

  string s;
  public:
  // void setname();
~dest(){
cout<<"constructor destroyed for string : "<<s<<endl;
}
  dest(){};
  dest(string a){
    s=a;
cout<<"constructor created for the string is : "<<s<<endl;
  }
void display();
};

int main()
{
  string c;
 cout<<"enter the string :"<<endl;
 cin>>c;
  dest s1=dest(c);
    return 0;
}