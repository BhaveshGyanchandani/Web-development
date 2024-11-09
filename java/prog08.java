import java.util.Scanner;

class student {
    int percentage;
    int roll_no;
    String student_name;

    public student() {
        roll_no = 0;
        student_name = "null";
        percentage = 0;

    }

    public student(int roll_no, String student_name, int percentage) {
        this.student_name = student_name;
        this.roll_no = roll_no;
        this.percentage = percentage;
        System.out.println("roll no. is :" + roll_no);
        System.out.println("student name is " + student_name);
        System.out.println("percentage is " + percentage);
        System.out.println("\n");
    }

}

public class prog08 {
    public static void main(String[] args) {
        int[] serial;
        int[] roll = new int[10];
        int[] percent = new int[10];
        String[] name = new String[10];

        Scanner sc = new Scanner(System.in);

        student[] stud = new student[10];

        for (int i = 0; i < 2; i++) {
            System.out.println("enter name of student");
            name[i] = sc.nextLine();
            System.out.println("enter roll_no");
            roll[i] = sc.nextInt();
            System.out.println("enter percentage of student");
            percent[i] = sc.nextInt();
            sc.nextLine();

            stud[i] = new student(roll[i], name[i], percent[i]);
        }

        // System.out.println("percent of " + stud[2].percentage);

        for (int i = 0; i <2; i++){
            for  (int j= i+1;j<2;j++) {
                if(stud[i].percentage<stud[j].percentage) {
                    int temp=stud[i].percentage;
                    stud[i].percentage= stud[j].percentage;
                    stud[j].percentage= temp; 

                }   
            }

        }

        
        for(int i=0;i<2;i++)
{
System.out.println("rank" +(i+1)+" is of student with rollno. " +stud[i].roll_no +" and name is  "+stud[i].student_name + " and percentage is " +stud[i].percentage);
}

        sc.close();
    }
}