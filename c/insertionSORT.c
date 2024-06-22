//->INSERTION SORT
#include <stdio.h>
int main()
{
    int a[100], size, temp, i, j, min;
    printf("enter the size of array : ");
    scanf("%d", &size);

    printf("\nthe array to insert : \n");
    for (i = 0; i < size; i++)
    {
        printf("enter the element to insert : ");
        scanf("%d", &a[i]);
    }

    for (i = 0; i < size ; i++)
    {
     temp=a[i];
     j=i-1;
        while (j >=0  && a[j]>temp)
        {
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=temp;
    }

    printf("the sorted array is : \n");
    for (i = 0; i < size; i++)
    {
        printf("%d   ", a[i]);
    }
    return 0;
}