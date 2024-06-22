#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};

int main()
{
    struct node *temp, *newnode, *head;
    int choice = 1;
    head = NULL;
    // int size = 5;

    //  for(int i=0;i<size;i++){
    //     newnode = (struct node *)malloc(sizeof(struct node));

    //     newnode->data = 5;
    //     newnode->next = NULL;

    //     if (head == NULL)
    //     {
    //         head = newnode;
    //         temp = newnode;

    //     }
    //     else
    //     {
    //         temp->next = newnode;
    //         temp = newnode;
    //     }
    // }

    // while (choice==1)
    // {
    //     newnode = (struct node *)malloc(sizeof(struct node));

    //     newnode->data = 5;
    //     newnode->next = NULL;

    //     if (head == NULL)
    //     {
    //         head = newnode;
    //         temp = newnode;
    //     }
    //     else
    //     {
    //         temp->next = newnode;
    //         temp = newnode;
    //     }
    //     printf("enter your chouce ro coninue or exit\n");
    //     scanf("%d", &choice);

        while(choice==1)   {
        newnode = (struct node *)malloc(sizeof(struct node));
        printf("enter the element");
        scanf("%d",&newnode->data );
        newnode->next = NULL;

        if (head == NULL)
        {
            head = newnode;
            temp = newnode;
        }
        else
        {
            temp->next = newnode;
            temp = newnode;
        }

                printf("\nenter your choice to coninue or exit\n");
        scanf("%d", &choice);
        }


    for (temp = head; temp != NULL; temp = temp->next)
    {
        printf("\n%d  ", temp->data);
    }

    return 0;
}