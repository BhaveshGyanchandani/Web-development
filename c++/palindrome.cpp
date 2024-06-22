#include <iostream>
#include <string>
using namespace std;
int main()
{
    int age;

    string name;
    string namerev;
    char temp;
    int count = 0;
    cin >> name;
    namerev = name;
    for (int i = 0; i < name.length() / 2; i++)
    {
        temp = name[i];
        name[i] = name[name.length() - i-1];
        name[name.length() - i-1] = temp;
    }
    cout << name;
    for (int i = 0; i < name.length(); i++)
    {
        if (name[i] == namerev[i])
        {
            count++;
        }
    }

    if(count==name.length()){
        cout<<endl<<"name is pallindrome ";
    }
    else{
        cout<<endl<<"not a palidrome";
    }


    return 0;
}