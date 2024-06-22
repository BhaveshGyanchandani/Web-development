#include <stdio.h>
int main()
{
    int a[50], size, num;
    int i = 0;
    int c = 0;

    printf("enter the size of array :");
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
    {
        printf("enter the no. : ");
        scanf("%d", &a[i]);
    }
    printf("\nemter the key");
    scanf("%d", &num);
    for(int i=0;i<size;i++){
        if(num==a[i]){
            c=1;
            break;
        }
    }
    if(c==1){
        printf("number is present");
    }
    else{
        printf("number is not present");
    }

    return 0;
}