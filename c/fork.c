#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/wait.h>

int main(){
    
    printf("Done by Bhavesh Gyanchandani , Roll number : 22CS20.\n");
    pid_t pid;

    pid = fork();

    if (pid < 0) {
        
        printf("Fork failed!\n");
        return 1;

    } 
    
    else if (pid == 0) {
        
    printf("Child process: PID = %d,Parent PID = %d\n", getpid(), getppid());

    }

     else {
        wait(NULL); 
        printf("Parent process: PID = %d\n", getpid());

    }
    return 0;
}