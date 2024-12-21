#include <stdio.h>
#include <winsock2.h>
#pragma comment(lib, "Ws2_32.lib")

int main() {
    WSADATA wsa;
    SOCKET client;
    struct sockaddr_in addr;
    char buffer[1024] = {0};
    WSAStartup(MAKEWORD(2, 2), &wsa);

    client = socket(AF_INET, SOCK_STREAM, 0);
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    addr.sin_port = htons(8080);
    connect(client, (struct sockaddr *)&addr, sizeof(addr));

    send(client, "Hello from Client", 17, 0);
    recv(client, buffer, sizeof(buffer), 0);
    printf("Server: %s\n", buffer);

    closesocket(client);
    WSACleanup();
    return 0;
}
// gcc client2.c -o client2 -lws2_32
//.\client2 
// o/p : Server: Hello from Server