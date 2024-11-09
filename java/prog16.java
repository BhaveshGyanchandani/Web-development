
import java.util.InputMismatchException;
import java.util.Scanner;

public class prog16 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            // Taking two integer inputs
            System.out.print("Enter the numerator: ");
            int numerator = sc.nextInt();

            System.out.print("Enter the denominator: ");
            int denominator = sc.nextInt();

            // Performing division
            int result = numerator / denominator;
            System.out.println("Result: " + result);

        } catch (ArithmeticException e) {
            // Handling divide-by-zero exception
            System.out.println("Error: Cannot divide by zero.");

        } catch (InputMismatchException e) {
            // Handling invalid input exception
            System.out.println("Error: Invalid input.");

        } finally {
            sc.close();
        }
    }
}
