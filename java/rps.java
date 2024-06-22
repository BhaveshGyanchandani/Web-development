import java.util.Random;
import java.util.Scanner;

public class rps {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Array of string names
        String[] names = { "paper", "rock", "scissor" };

        // Create a Random object
        Random random = new Random();

        // Generate a random index within the range of the array
        int index = random.nextInt(names.length);

        // Retrieve the randomly selected name
        String randomName = names[index];

        // Print the randomly selected name

        System.out.println("choose rock as r, paper as p or scissor as s ");
        String choose = sc.nextLine();

        System.out.println("Randomly selected name: " + randomName);
        if (randomName == "scissor" && choose == "s" || randomName == "rock" && choose == "r"
                || randomName == "paper" && choose == "p") {
            System.out.println("draw");
        }
        if (randomName == "scissor" && choose == "s") {
            System.out.println("draw");
        }
        if (randomName == "rock" && choose == "r") {
            System.out.println("draw");
        }
        if (randomName == "paper" && choose == "p") {
            System.out.println("draw");
        } else if (randomName == "rock" && choose == "p") {
            System.out.println("user won");
        } else if (randomName == "paper" && choose == "s") {
            System.out.println("user won");
        } else if (randomName == "scissor" && choose == "r") {
            System.out.println("user won");
        } else {
            System.out.println("Computer Won");
        }

        sc.close();
    }
}