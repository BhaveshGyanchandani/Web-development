#include <iostream>
using namespace std;

class complex
{
public:
    int a, b;
    complex(){};
    void comp(int c, int d)
    {
        a = c;
        b = d;
    }
};
class complexADD : public complex
{
    public:

    complexADD(){};
    complexADD(complex e, complex f)
    {
        // cout << "real part of complex is : " << e.a + f.a;
        // cout << "imaginary part of complex is : " << e.b + f.b << "i" <<endl;
        cout <<endl<< "the complex formed is : " << e.a + f.a << "+" << e.b + f.b << "i" << endl;
    }
};
class complexSUB : public complex
{
    public:

    complexSUB(){};
    complexSUB(complex e, complex f)
    {
        // cout << "real part of complex is : " << f.a - e.a;
        // cout << "imaginary part of complex is : " << f.b - e.b << "i" <<endl;
        cout <<endl<< "the complex formed is : " << f.a - e.a << "+" << f.b - e.b << "i" << endl;
    }
};


void display();

int main()
{
    complexADD c1;
    complexADD c2;
    c1.comp(3, 4);
    c2.comp(5, 6);
    complexADD(c1,c2);
    complexSUB(c1,c2);

    return 0;
}