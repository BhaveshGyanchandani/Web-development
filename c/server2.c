#include <stdio.h>
#include <winsock2.h>
#pragma comment(lib, "Ws2_32.lib")

int main() {
    WSADATA wsa;
    SOCKET server, client;
    struct sockaddr_in addr;
    char buffer[1024] = {0};
    WSAStartup(MAKEWORD(2, 2), &wsa);

    server = socket(AF_INET, SOCK_STREAM, 0);
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = INADDR_ANY;
    addr.sin_port = htons(8080);
    bind(server, (struct sockaddr *)&addr, sizeof(addr));
    listen(server, 3);

    client = accept(server, NULL, NULL);
    recv(client, buffer, sizeof(buffer), 0);
    printf("Client: %s\n", buffer);
    send(client, "Hello from Server", 17, 0);

    closesocket(client);
    closesocket(server);
    WSACleanup();
    return 0;
}
//gcc server2.c -o server2 -lws2_32
//.\server2
// output : Client: Hello from Client