#include <stdio.h>

int main()
{
    int top = -1;
    int queue[100];
    int rear = -1;
    int choice = 1;

    int element, size;
    printf("enter the size :");
    scanf("%d", &size);
    printf("enter the choice   1.insert    2.delete     3.display  4.exit \n  ");
    scanf("%d", &choice);

    
        while (choice)
        {
            if (choice == 1)
            {
                printf("enter the element :");
                scanf("%d", &element);
                {
                    if (top == -1 && rear == -1)
                    {

                        top = rear = 0;
                        queue[rear] = element;
                    }
                    else if (rear == size - 1)
                    {
                        printf("overflow\n");
                    }
                    else
                    {
                        rear++;
                        queue[rear] = element;
                    }
                }
            }

            else if (choice == 2)
            {
                if (top == -1 && rear == -1)
                {
                    printf("empty queue\n");
                   
                }
                else if (top == rear)
                {
                    printf("the deleted element was : %d",queue[top]);
                    printf("\nreset the value :");
                    top = rear = -1;
                }
                else//conditon of top==-1;
                {
                    printf("THE DELETED ELEMENT WAS %d\n", queue[top]);
                    top++;
                }
            }
            else if (choice == 3)
            {
                int i;
                if (top == -1 && rear == -1)
                {
                    printf("empty queue\n");
                }
                else
                {

                    for (i = top; i < rear + 1; i++)
                    {
                        printf("%d  ", queue[i]);
                    }
                }
            }
            else
            {
                break;
            }
        printf("\nenter the choice   1.insert    2.delete     3.display  4.exit \n  ");
        scanf("%d", &choice);
        }
    
    return 0;
}