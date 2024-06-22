#include <stdio.h>
int main()
{
    int a[100], size, temp, i, j, key, element;
    int start = 0;
    int end,mid;
    printf("enter the size of array : ");
    scanf("%d", &size);
    for (i = 0; i < size; i++)
    {
        printf("the array element is : ");
        scanf("%d", &a[i]);
    }
    printf("\nenter the key to search with binary search :\n");
    scanf("%d", &key);
    end = size - 1;
    mid = (start + end) / 2;
    while (start <= end)
    {
        mid = (start + end) / 2;
        if (key > a[mid])
        {
            start = mid + 1;
        }
        else if (key < a[mid])
        {
            end = mid - 1;
        }
         else if (key == a[mid])
        {
            printf("key is present ");
            return mid;
            break;
        }
    }
if(key!=a[mid]){
    printf("key is not present ");
}
    return 0;
}