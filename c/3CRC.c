//CRC code
#include <stdio.h>
#include <string.h>
void performCRC(char data[], char divisor[], char crc[]) {
    int dataLen = strlen(data), divisorLen = strlen(divisor);
    char temp[100];
    strcpy(temp, data);
    for (int i = 0; i <= dataLen - divisorLen; i++) {
        if (temp[i] == '1') {
            for (int j = 0; j < divisorLen; j++) {
                temp[i + j] = (temp[i + j] == divisor[j]) ? '0' : '1';
            }
        }
    }
    strncpy(crc, temp + dataLen, divisorLen - 1);
    crc[divisorLen - 1] = '\0';
}

int main() {
    char data[100], divisor[100], crc[100], transmitted[100];
    printf("Enter data bits: ");
    scanf("%s", data);
    printf("Enter divisor: ");
    scanf("%s", divisor);

    int dataLen = strlen(data), divisorLen = strlen(divisor);
    for (int i = 0; i < divisorLen - 1; i++) {
        data[dataLen + i] = '0';
    }
    data[dataLen + divisorLen - 1] = '\0';
    performCRC(data, divisor, crc);
    printf("CRC: %s\n", crc);
    strcpy(transmitted, data);
    strncpy(transmitted + dataLen, crc, divisorLen - 1);
    transmitted[dataLen + divisorLen - 1] = '\0';

    printf("Transmitted message: %s\n", transmitted);
    printf("Enter received message: ");
    scanf("%s", data);
    performCRC(data, divisor, crc);

    if (strchr(crc, '1') == NULL) {
        printf("No error detected.\n");
    } else {
        printf("Error detected.\n");
    }
    return 0;
}
