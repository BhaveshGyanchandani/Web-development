#include <stdio.h>
#include <stdlib.h>
 
struct stack
{
    int size;
    int top;
    int *arr;
};
 
int isEmpty(struct stack *ptr)
{
    if (ptr->top == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
 
int isFull(struct stack *ptr)
{
    if (ptr->top == ptr->size - 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
 
int main()
{
    // struct stack s;
    // s.size = 80;
    // s.top = -1;
    // s.arr = (int *) malloc(s.size * sizeof(int));
 
    struct stack *s;
   s = (struct stack *)malloc(sizeof(struct stack));//This order works fine for me, as we need to provide first "how much memory the pointer would have" before accessing it.


    s->size = 6;
    s->top = -1;
    s->arr = (int *)malloc(s->size*sizeof(int));

s->arr[0] = 7;
    s->top++; 
    
 if(isEmpty(s)){
        printf("The stack is empty");
    }
    else{
        printf("The stack is not empty");
    }

    

 
    return 0;
}