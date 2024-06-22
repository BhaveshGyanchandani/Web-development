#include <stdio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *next;
};

int main()
{
    struct node *temp, *newnode, *head, *nextnode, *prevnode, *q;
    int choice, counter = 0;
    int position, i = 1;
    head = NULL;

    printf("\nenter your choice to    1.insert    2.delete     3.display   4. exit\n");
    scanf("%d", &choice);
    while (choice)
    {
        if (choice == 1)
        {
            newnode = (struct node *)malloc(sizeof(struct node));
            printf("enter the element : ");
            scanf("%d", &newnode->data);
            newnode->next = NULL;

            if (head == NULL)
            {
                head = newnode;
                temp = newnode;
                counter++;
            }
               else
            {   temp=head;
            while(temp->next!=NULL){
                temp=temp->next;
            }
                temp->next = newnode;
                counter++;
            }
        }
        else if (choice == 2)
        {
            q = head;
            printf("enter the position to delete : ");
            scanf("%d", &position);
            if (position == 1)
            {
                nextnode = q;
                head = q->next;
                free(nextnode);
                counter--;
            }
            else if (position>counter){
                printf("invlid position");
            }
            else if (position == counter)            
            {
                while (q->next != NULL)
                {
                    prevnode = q;
                    q = q->next;
                }
                if (q == head)
                {
                    head = 0;
                    free(q);
                    counter--;
                }
                else
                {
                    prevnode->next = NULL;
                    free(q);
                    temp=prevnode;
                    counter--;
                }
            }
            else
            {
                while (i < position - 1)
                {
                    q = q->next;
                    i++;
                }
                nextnode = q->next;
                q->next = nextnode->next;
                free(nextnode);
                counter--;
            }
        }

        else if (choice == 3)
        {
            for (temp = head; temp != NULL; temp = temp->next)
            {
                printf("\n%d  ", temp->data);
            }
        }
        else
        {
            break;
        }
        printf("\nenter your choice to    1.insert    2.delete     3.display   4. exit\n");
        scanf("%d", &choice);
    }

    return 0;
}