// server.c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <winsock2.h>
#include <ws2tcpip.h>

#define PORT 8080
#define MAX_BUFF 1024

void handle_client(SOCKET client_socket) {
    char buffer[MAX_BUFF];
    int bytes_read;

    while (1) {
        // Clear buffer
        memset(buffer, 0, MAX_BUFF);

        // Receive message from client
        bytes_read = recv(client_socket, buffer, sizeof(buffer), 0);
        if (bytes_read <= 0) {
            printf("Client disconnected.\n");
            break;
        }

        printf("Client: %s", buffer);

        // Check if client wants to exit
        if (strncmp("exit", buffer, 4) == 0) {
            printf("Server exiting...\n");
            break;
        }

        // Send response to client
        printf("Enter response: ");
        fgets(buffer, MAX_BUFF, stdin);
        send(client_socket, buffer, strlen(buffer), 0);
    }

    closesocket(client_socket);
}

int main() {
    WSADATA wsaData;
    int result = WSAStartup(MAKEWORD(2, 2), &wsaData);
    if (result != 0) {
        fprintf(stderr, "WSAStartup failed: %d\n", result);
        return 1;
    }

    SOCKET server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    int addr_len = sizeof(client_addr);

    // Create socket
    server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket == INVALID_SOCKET) {
        perror("Socket creation failed");
        WSACleanup();
        exit(EXIT_FAILURE);
    }
    printf("Server socket created successfully.\n");

    // Bind socket to port
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);

    if (bind(server_socket, (struct sockaddr *)&server_addr, sizeof(server_addr)) == SOCKET_ERROR) {
        perror("Socket bind failed");
        closesocket(server_socket);
        WSACleanup();
        exit(EXIT_FAILURE);
    }
    printf("Socket successfully bound to port %d.\n", PORT);

    // Start listening
    if (listen(server_socket, 5) == SOCKET_ERROR) {
        perror("Listen failed");
        closesocket(server_socket);
        WSACleanup();
        exit(EXIT_FAILURE);
    }
    printf("Server listening...\n");

    // Accept client connection
    client_socket = accept(server_socket, (struct sockaddr *)&client_addr, &addr_len);
    if (client_socket == INVALID_SOCKET) {
        perror("Server accept failed");
        closesocket(server_socket);
        WSACleanup();
        exit(EXIT_FAILURE);
    }
    printf("Client connected.\n");

    // Handle client
    handle_client(client_socket);

    closesocket(server_socket);
    WSACleanup();
    return 0;
}
