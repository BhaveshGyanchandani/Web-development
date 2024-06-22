#include <stdio.h>
#include <stdlib.h>
int main()
{
    int stack[100];
    int size, element;
    int item;
    int top = -1;
    int choice = 1;

    // printf("enter the size of stack :");
    // scanf("%d", &size);

           while (choice)
        {
            if (choice == 1)
            {
                printf("enter the element :");
                scanf("%d", &element);
                if(top==-1){
                    top=0;
                    stack[top]=element;
                }
                else{
                    top++;
                    stack[top]=element;
                }
            }
            else if (choice == 2)
            {
                if (top == -1  )
                {
                    printf("nothing to delete :");
                }
                else
                {
                    item=stack[top];
                    printf("THE POPPED ELEMENT IS %d", item);
                    top--;
                }
            }

            else if (choice == 3)
            {
                if (top == -1)
                {
                    printf("no element in stack");
                }
                else
                {
                printf("the stack is : \n");
                    for (int i = top; i >=0; i--) ///or for(int i=top;i>=0;i++)
                    {
                        printf("%d   ", stack[i]);
                    }
                }
            }
            else
            {
                break;
            }
            printf("\nenter the choice  1.push   2.pop    3.display    4.exit ");
            scanf("%d", &choice);
        }
    

    return 0;
}