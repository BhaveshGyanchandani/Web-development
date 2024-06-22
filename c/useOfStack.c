#include <stdio.h>
#include <stdlib.h>  //bcz we are using malloc
struct stack
{
    int size, top;
    int *arr;
};
int isEmpty(struct stack*ptr)
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
int Full(struct stack*ptr){
if(ptr->top==ptr->size-1){
  return 1;
}
else{
    return 0;
}
}

int main()
{
    // struct stack s;
    // s.size=80;
    // s.top=-1;
    // s.arr =(int *)malloc(s.size*sizeof(int));
    // iss commment mein kucch glt hua toh settinf mein comment type krke  c_cpp+doxygen namm se wali ko //! se /// mein kr dena
    // sizeof(int) bcz we are using int we can also use another thing inplace
    struct stack *s; // now the stack is an pointer
    s->size = 10;    
    //. can be replace by -> arrrow
    s->top = -1;
    s->arr = (int *)malloc(s->size * sizeof(int));

//pushing an elment manually
s->arr[0]=0;
s->top++;


// check whether the sta k is empty or full
if(isEmpty(s)){
    printf("the stack is empty");
}
else{
       printf("the stack is not empty");
}
    return 0;
}