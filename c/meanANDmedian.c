#include <stdio.h>
int main()
{
    int a[50];
    int size;
    float sum = 0, c = 0;
    int temp, p, q, z;
    float r;

    printf("enter the size of array :");
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
    {
        printf("enter the no. : ");
        scanf("%d", &a[i]);
    }
    for (int i = 0; i < size; i++)
    {
        printf("enter the no. :%d \n", a[i]);
    }

    for (int i = 0; i < size; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            if (a[i] > a[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
            else
            {
                break;
            }
        }
    }
    printf("\n the ascending order is ");
    for (int b = 0; b < size; b++)
    {
        printf("%d ", a[b]);
    }


    printf("\nthe sum of array is : ");
    for (int i = 0; i < size; i++)
    {
        sum = sum + a[i];
    }
    printf("%f", sum);
    printf("\nthe mean is %f",(float)( sum / size ));
    
    

    if (size % 2 != 0)
    {
        p = size / 2;
        printf("\nmedian is %d", a[p]);
    }
    else
    {
        p = size / 2;
        z = a[p - 1];
        q = a[p];
        r = (z + q);
        printf("%d\n", p);
        printf("\nmedian is %f\n", r / 2);
        printf("%d", a[3]);
    }
    return 0;
}