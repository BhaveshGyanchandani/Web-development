// Character stuffing
#include <stdio.h>
#include <string.h>
#define FLAG 'F'
#define ESC 'E'
void characterStuffing(const char input[], char stuffed[]) {
    int i, j = 0;

    stuffed[j] = FLAG;
    j++;
    for (i = 0; input[i] != '\0'; i++) {
        if (input[i] == FLAG || input[i] == ESC) {
            stuffed[j] = ESC;
            j++;
        }
    stuffed[j] = input[i];
    j++;
    }

    stuffed[j] = FLAG;
    j++;
    stuffed[j] = '\0';
}

void characterUnstuffing(const char stuffed[], char unstuffed[]) {
    int i, j = 0;
    for (i = 1; stuffed[i] != '\0'; i++) {
        if (stuffed[i] == ESC && (stuffed[i + 1] == FLAG || stuffed[i + 1] == ESC)) {
            i++;
        } else if (stuffed[i] == FLAG) {
            break;
        }
     unstuffed[j] = stuffed[i];
    j++;
    }
    unstuffed[j] = '\0';
}

int main() {
    char input[] = "ABCDEFABF";
    char stuffed[200];
    char unstuffed[200];
    characterStuffing(input, stuffed);
    printf("Stuffed Data: %s\n", stuffed);
    characterUnstuffing(stuffed, unstuffed);
    printf("Unstuffed Data: %s\n", unstuffed);
    return 0;
}
