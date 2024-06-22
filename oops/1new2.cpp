#include <iostream>
#include <string>
using namespace std;

class item
{
    int counter = 1;
    int code;
    char name[100];
    float cost;

public:
    void getitem();
    void getcode()
    {
        cout << "enter the code " << counter << "st item :" << endl;
        cin >> code;
    }
    void getname()
    {
        cout << "enter the name of item " << counter << "st item :" << endl;
        cin >> name;
    }
 void getcost()
{
    cout << "enter the cost of "<<counter << "st item :" << endl;
    cin >> cost;
}
void mydisplay()
{
    cout << "the name,code and cost of item " <<counter << " are " << name << " " << code << " " << cost << endl;
    counter++;
}
};

int main()
{

    item fruit;
    int size;
    cout << "enter the size : " << endl;
    cin >> size;
    for (int i = 0; i < size; i++)
    {
        fruit.getcode();
        fruit.getcost();
        fruit.getname();
        fruit.mydisplay();
    }

    return 0;
}