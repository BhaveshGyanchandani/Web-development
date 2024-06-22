#include<stdio.h>
#include<string.h>
int main(){
char city[100];
printf("eneter the city name\n");
printf("what is the name : ");
for(int i=0;i<5;i++){
scanf("%c",&city[i]);
}

for(int i=0;i<5;i++){
    printf("\n %c",city[i]);
}

    return 0;
}