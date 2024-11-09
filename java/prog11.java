
import java.util.Scanner;

class Data {

    float num1, num2;

}

class maximum extends Data {

    public void max(float a, float b) {
        num1 = a;
        num2 = b;
        if (num1 > num2) {
            System.out.println("num1 is greater");
        } else if (num2 > num1) {
            System.out.println("num2 is greater");
        } else {
            System.out.println("both are equal");
        }
    }

}

public class prog11 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        maximum A = new maximum();
        A.max(1, 2);
        sc.close();
    }
}
