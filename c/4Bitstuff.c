// BIt stuffing
#include <stdio.h>
#include <string.h>
void bitStuffing(char input[], char stuffed[]) {
    int count = 0, j = 0;
    for (int i = 0; input[i] != '\0'; i++) {
        if (input[i] == '1') count++;
        else count = 0;

        stuffed[j++] = input[i];

        if (count == 5) {
            stuffed[j++] = '0';
            count = 0;
        }
    }
    stuffed[j] = '\0';
}

void bitUnstuffing(char stuffed[], char unstuffed[]) {
    int count = 0, j = 0;
    for (int i = 0; stuffed[i] != '\0'; i++) {
        if (stuffed[i] == '1') count++;
        else count = 0;

        unstuffed[j++] = stuffed[i];

        if (count == 5 && stuffed[i + 1] == '0') {
            i++;
            count = 0;
        }
    }
    unstuffed[j] = '\0';
}

int main() {
    char input[100], stuffed[200], unstuffed[100];

    printf("Enter binary input: ");
    scanf("%s", input);

    bitStuffing(input, stuffed);
    printf("Stuffed data: %s\n", stuffed);

    bitUnstuffing(stuffed, unstuffed);
    printf("Unstuffed data: %s\n", unstuffed);
    return 0;
}
