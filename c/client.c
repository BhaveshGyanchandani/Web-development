// client.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>
#include <ws2tcpip.h>

#define PORT 8080
#define MAX_BUFF 1024

int main() {
    WSADATA wsaData;
    int result = WSAStartup(MAKEWORD(2, 2), &wsaData);
    if (result != 0) {
        fprintf(stderr, "WSAStartup failed: %d\n", result);
        return 1;
    }

    SOCKET client_socket;
    struct sockaddr_in server_addr;
    char buffer[MAX_BUFF];

    // Create socket
    client_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (client_socket == INVALID_SOCKET) {
        perror("Socket creation failed");
        WSACleanup();
        exit(EXIT_FAILURE);
    }
    printf("Client socket created successfully.\n");

    // Define server address
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    inet_pton(AF_INET, "127.0.0.1", &server_addr.sin_addr);  // localhost

    // Connect to server
    if (connect(client_socket, (struct sockaddr *)&server_addr, sizeof(server_addr)) == SOCKET_ERROR) {
        perror("Connection to server failed");
        closesocket(client_socket);
        WSACleanup();
        exit(EXIT_FAILURE);
    }
    printf("Connected to server.\n");

    while (1) {
        // Get user input
        printf("Enter message: ");
        fgets(buffer, MAX_BUFF, stdin);

        // Send message to server
        send(client_socket, buffer, strlen(buffer), 0);

        // Check if user wants to exit
        if (strncmp("exit", buffer, 4) == 0) {
            printf("Client exiting...\n");
            break;
        }

        // Receive server response
        memset(buffer, 0, MAX_BUFF);
        if (recv(client_socket, buffer, sizeof(buffer), 0) > 0) {
            printf("Server: %s", buffer);
        }
    }

    closesocket(client_socket);
    WSACleanup();
    return 0;
}