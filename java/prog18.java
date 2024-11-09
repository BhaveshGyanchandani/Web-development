import java.util.Scanner;

// Define a custom exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class prog18 {

    // Method to validate age for voting
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("You must be 18 or above to vote.");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            // Input age from user
            System.out.print("Enter your age: ");
            int age = sc.nextInt();

            // Validate the age
            validateAge(age);

            // If no exception, age is valid
            System.out.println("Age is valid for voting.");

        } catch (InvalidAgeException e) {
            // Handle the custom exception
            System.out.println(e.getMessage());

        } catch (Exception e) {
            // Handle any other exceptions (e.g., invalid input)
            System.out.println("Invalid input. Please enter a number.");

        } finally {
            sc.close();
        }
    }
}
