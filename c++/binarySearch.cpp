#include <iostream>
using namespace std;
//this needs an sorted array in ascending order
int search(int a[], int size, int key)
{

    int start = 0;
    int end = size - 1;

    int mid = start+(end-start)/2;
    
    while (start <= end)
    {

        if (a[mid] == key)
        {
            return mid;
        }
        else if (key > a[mid])//right wale part mein jane ke liye
        {
            start = mid + 1;
        }
        else//left wale part mein jane ke liye
        {
            end = mid - 1;
        }

        mid = start+(end-start)/2; 
        // ye else if aur else jo ki updated hai mtlb jb
        // else if wala chlega woh start ki value ko update krke 
        //ismein start ki nyi value dalega aur loop tb tk chlayega
        //jb tk apna expresssion start<=end satisfy na ho jaye
        //agr value nhi mili toh woh loop end krke -1 return kr dega

    }
    return -1;
}

int main()
{
    int even[6] = {1, 2, 3, 4, 5, 6};
    int odd[5] = {1, 2, 3, 4, 5};

    int evenindex = search(even, 6, 1);//int can go upto 2^31-1 after
    cout << "the index of 2 is " << evenindex << endl;
    int oddindex = search(odd, 5, 1);
    cout << "the index of 1 is " << oddindex << endl;
    return 0;
}