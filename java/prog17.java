
import java.util.Scanner;

public class prog17 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter a string: ");
            String inputString = sc.nextLine();

            // Create a character array with a size equal to the length of the input string
            char[] charArray = new char[inputString.length()];

            inputString.getChars(0, inputString.length(), charArray, 0);

            System.out.println("Character array: ");
            for (char c : charArray) {
                System.out.print(c);
            }
            System.out.println();

        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("Error: String index out of bounds.");

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Array index out of bounds.");

        } finally {
            sc.close();
        }
    }
}
