#include <stdio.h>
#define size 10
int top = -1;
int rear = -1;
int queue[size];

void enque(int x)
{
    if (top == -1 && rear == -1)
    {

        top = rear = 0;
        queue[rear] = x;
    }
    else if (rear == size - 1)
    {
        printf("overflow\n");
    }
    else
    {
        rear++;
        queue[rear] = x;
    }
}

void deque(int x)
{

    if (top == -1 && rear == -1)
    {
        printf("empty queue\n");
    }
    else if(top==rear){
        printf("reset the value :");
        top=rear=-1;
    }
    else{
        printf("THE DELETED ELEMENT WAS %d\n",queue[top]);
        top++;
    
    }
}

void display()
{
    int i;
    if (top == -1 && rear == -1)
    {
        printf("empty queue");
    }
    else
    {

        for (i = top; i < rear + 1; i++)
        {
            printf("%d  ", queue[i]);
        }
    }
}

int main()
{
    enque(5);
    enque(4);
    enque(3);
    enque(2);
    enque(1);

deque(5);
deque(4);
deque(3);
    display();
    return 0;
}