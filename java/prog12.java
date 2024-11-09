
import java.util.Scanner;

class Student {

    String name;
    int roll_no;

    public void st_name(String name) {
        this.name = name;
    }

    public void roll_no(int roll_no) {
        this.roll_no = roll_no;
    }

    public String getname() {
        return name;
    }

    public int getroll() {
        return roll_no;
    }

}

class Test extends Student {

    int marks_maths;
    int marks_english;

    public void marks(int marks_english, int marks_maths) {
        this.marks_english = marks_english;
        this.marks_maths = marks_maths;
    }

    public void display() {
        System.out.println("the marks of maths is : " + marks_maths);
        System.out.println("the marks of marks_english is : " + marks_english);
    }

    public int engmarks() {
        return marks_english;
    }

    public int mathmarks() {
        return marks_maths;
    }

}

class Result extends Test {

    int total_score;

    @Override
    public void display() {
        total_score = marks_english + marks_maths;
        System.out.println("the name of student is " + getname() + " whose roll no. is " + getroll());
        System.out.println("the total score of both subjects is : " + total_score);
    }
}

public class prog12 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        Result r = new Result();
        Test t = new Test();

        r.st_name("me");
        r.roll_no(1);
        r.marks(50, 90);
        r.display();

        sc.close();
    }
}
