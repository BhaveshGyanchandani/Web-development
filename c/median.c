#include <stdio.h>
int main()
{
    int a[50], size, num;
    float sum = 0, c = 0;
    int temp, p, q, z;
    float r;

    z = (p + q) / 2;
    printf("enter the size of array :");
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
    {
        printf("enter the no. : ");
        scanf("%d", &a[i]);
    }

    if (size % 2 != 0)
    {
        p = size / 2;
        printf("median is %d", a[p]);
    }
    else
    {
        p = size / 2;
        z = a[p - 1];
        q = a[p];
        r = (z + q);
        printf("%d\n", p);
        printf("median is %f\n", r / 2);
        printf("%d", a[3]);
    }

    return 0;
}