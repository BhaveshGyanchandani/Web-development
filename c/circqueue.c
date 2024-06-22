#include <stdio.h>
int main()
{
    int queue[100];
    int choice = 1;
    int size, element;
    int front = -1;
    int rear = -1;

    printf("enter the size of queue :");
    scanf("%d", &size);

    printf("\n\nenter the choice 1.insert   2.delete   3.display    4.exit : \n");
    scanf("%d", &choice);
    ;

    while (choice)
    {
        if (choice == 1)
        {
            printf("\nenter the element of insert :");
            scanf("%d", &element);

            if (front == -1 && rear == -1)
            {

                front = 0;
                rear = 0;
                queue[rear] = element;
            }
            else if ((rear + 1) % size == front)
            {
                printf("queue is full :\n");
            }
            else
            {
                rear = (rear + 1) % size;
                queue[rear] = element;
            }
        }
        else if (choice == 2)
        {

            if (front == -1 && rear == -1)
            {
                front = 0;
                printf("nothing to delete :");
            }
            else if (front == rear)
            {
                printf("the deleted element was : %d", queue[front]);
                printf("\nvalue reseted :");
                front = rear = -1;
            }
            else if (front == -1)
            {
                printf("the dequeued element was %d ", queue[front]);
                front = (front + 1) % size;
            }
            else
            {
                printf("the dequeued element was %d ", queue[front]);
                front = (front + 1) % size;
            }
        }

        else if (choice == 3)
        {
            int i;
            if (front == -1 && rear == -1)
            {
                printf("the queue is empty:\n\n");
            }
            else
            {
                if (front == rear == -1)
                {
                    printf("queue is empty\n");
                }

                // else
                // {  for (i= front; i != rear; i = (i + 1) % size)
                //     {

                //         printf("%d   ", queue[i]);
                //     }
                //     printf("  %d ",queue[rear]);
                //        }
                //     OR
                    else
                    {
                        for (i = front; i < rear + 1; i = (i + 1) % size)
                        {
                            if (i == rear)
                            {
                                printf("%d   ", queue[i]);
                                break;
                            }
                            printf("%d   ", queue[i]);
                        }
                    }
                }
            }
            else if (choice == 4)
            {
                break;
            }

            printf("\n\nenter the choice 1.insert   2.delete   3.display    4.exit : \n");
            scanf("%d", &choice);
        }

        return 0;
    }