#include <stdio.h>

int main()
{
    int a[100], size, temp, i, j, flag;
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
        flag = 0;
        for (j = 0; j < size - i - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                flag = 1;
            }
        }
        if (flag == 0)
        {
            break;
        }
    }

    printf("the sorted array is : \n");
    for (i = 0; i < size; i++)
    {
        printf("%d   ", a[i]);
    }
    return 0;
}