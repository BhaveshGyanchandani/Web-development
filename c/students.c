
#include <stdio.h>

int main() {
    int numStudents, numSubjects;

    printf("Enter the number of students: ");
    scanf("%d", &numStudents);

    printf("Enter the number of subjects: ");
    scanf("%d", &numSubjects);

    int marks[numStudents][numSubjects];
    for (int i = 0; i < numStudents; i++) {
        printf("\nEnter marks for student %d:\n", i + 1);
        for (int j = 0; j < numSubjects; j++) {
            printf("Enter marks for subject %d: ", j + 1);
            scanf("%d", &marks[i][j]);
        }
    }
    printf("\nMarks for each student and each subject:\n");
    for (int i = 0; i < numStudents; i++) {
        printf("\nStudent %d:\n", i + 1);
        for (int j = 0; j < numSubjects; j++) {
            printf("Subject %d: %d\n", j + 1, marks[i][j]);
        }
    }

    return 0;
}