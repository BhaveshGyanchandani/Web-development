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

    while (choice)
    {
        if (choice == 1)
        {
            newnode = (struct node *)malloc(sizeof(struct node));
            printf("enter the element");
            scanf("%d", &newnode->data);
            newnode->next = NULL;

            if (head == NULL)
            {
                head = newnode;
                temp = newnode;
            }
            else
            {   temp=head;
            while(temp->next!=NULL){
                temp=temp->next;
            }
                temp->next = newnode;
            }
        }
        else if (choice == 2)
        {
            struct node *pn, *cn, *nn;
            pn = 0;
            cn = nn = head;
            while (nn != 0)
            {
                nn = nn->next;
                cn->next = pn;
                pn = cn;
                cn = nn;
            }
            head = pn;
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

        printf("\nenter your choice to 1.insert    2.reverse   3.display  4.exit   \n");
        scanf("%d", &choice);
    }

    return 0;
}