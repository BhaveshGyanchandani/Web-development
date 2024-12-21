// hamming code for error detect and correct
#include <stdio.h>
void calculateParityBits(int data[], int code[]) {
    code[0] = data[0] ^ data[1] ^ data[3];
    code[1] = data[0] ^ data[2] ^ data[3];
    code[3] = data[1] ^ data[2] ^ data[3];
    
    code[2] = data[0];
    code[4] = data[1];
    code[5] = data[2];
    code[6] = data[3];
}

int detectAndCorrect(int received[]) {
    int s1 = received[0] ^ received[2] ^ received[4] ^ received[6];
    int s2 = received[1] ^ received[2] ^ received[5] ^ received[6];
    int s4 = received[3] ^ received[4] ^ received[5] ^ received[6];
    int errorPos = s1 + (s2 * 2) + (s4 * 4);
    if (errorPos > 0) {
        received[errorPos - 1] ^= 1;
    }
    return errorPos;
}

int main() {
    int data[4], code[7], received[7];
    printf("Enter 4 data bits: ");
    for (int i = 0; i < 4; i++) scanf("%d", &data[i]);
    calculateParityBits(data, code);
    printf("Hamming code: ");
    for (int i = 0; i < 7; i++) printf("%d", code[i]);
    printf("\nEnter 7 received bits: ");
    for (int i = 0; i < 7; i++) scanf("%d", &received[i]);
    int errorPos = detectAndCorrect(received);
    if (errorPos > 0) printf("Error at position %d corrected.\n", errorPos);
    else printf("No error detected.\n");
    printf("Corrected code: ");
    for (int i = 0; i < 7; i++) printf("%d", received[i]);
    printf("\n");
    return 0;
}
