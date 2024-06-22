#include <iostream>
using namespace std;
// this needs an sorted array in ascending order

int left(int a[], int size, int key)
{
    int start = 0;
    int end = size - 1;
    int ans = -1;
    int mid = start + (end - start) / 2;
    while (start <= end)
    {
        if (key == a[mid])
        {
            ans = mid;
            end = mid - 1;
        }
        else if (key > a[mid])
        {
            start = mid + 1;
        }
        else if (key < a[mid])
        {
            end = mid - 1;
        }
        mid = start + (end - start) / 2;
    }
    return ans;
}

int right(int a[], int size, int key)
{
    int start = 0;
    int end = size - 1;
    int ans = -1;
    int mid = start + (end - start) / 2;
    while (start <= end)
    {
        if (key == a[mid])
        {
            ans = mid;
            start = mid + 1;
        }
        else if (key > a[mid])
        {
            start = mid + 1;
        }
        else if (key < a[mid])
        {
            end = mid - 1;
        }
        mid = start + (end - start) / 2;
    }
    return ans;
}
int main()
{
    int even[6] = {1, 2, 2, 2, 6, 6};
    int odd[5] = {1, 2, 3, 4, 5};

    int evenindex = left(even, 6, 6); // int can go upto 2^31-1 after
int evenindex2 = right(even, 6, 6);
    cout << "the first occurence of 2 is " << evenindex << endl;
        cout << "the last occurence of 2 is " << evenindex2 << endl;
        cout<<"to find the total no of occurence is "<<evenindex2-evenindex+1<<endl;
    return 0;
}