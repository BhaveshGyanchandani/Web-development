import java.util.Scanner;

public class second {

    public static void main(String[] args) {
        int a = 7;
        float b = 3.33f;
        Scanner Sc = new Scanner(System.in);
        String str = Sc.nextLine();
        System.out.printf("%d and %f are", a, b);
        System.out.print(a + " " + b);
        System.out.println(" and  are");
        System.out.println(" the string is " + str);

        Sc.close(); // to avoud the Sc was never closed warning
    }
}