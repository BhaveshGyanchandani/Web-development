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

    for (i = 0; i < size - 1; i++)
    {
        min = i;
        for (j = i + 1; j < size; j++)
        {
            if (a[j] < a[min])
            {
                min = j;
            }
        }
        if(min!=j){
            temp=a[min];
            a[min]=a[i];
            a[i]=temp;
        }
    }

    printf("the sorted array is : \n");
    for (i = 0; i < size; i++)
    {
        printf("%d   ", a[i]);
    }
    return 0;
}