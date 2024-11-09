
import java.util.ArrayList;

public class prog05 {

    // Method to check if a number is prime
    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    // Method to get all prime numbers from 1 to 100
    public static ArrayList<Integer> getPrimes() {
        ArrayList<Integer> primes = new ArrayList<>();
        for (int i = 2; i <= 100; i++) {
            if (isPrime(i)) {
                primes.add(i);
            }
        }
        return primes;
    }

    // Main method
    public static void main(String[] args) {
        ArrayList<Integer> primes = getPrimes();
        int[][] zigzagArray = new int[10][10];

        // Place primes in zigzag pattern by ranges
        int index = 0;
        for (int range = 0; range < 10; range++) {
            int rowStart = range * 10 + 1;
            int rowEnd = rowStart + 9;

            ArrayList<Integer> rowPrimes = new ArrayList<>();
            while (index < primes.size() && primes.get(index) <= rowEnd) {
                rowPrimes.add(primes.get(index));
                index++;
            }

            if (range % 2 == 0) {
                // Fill row left to right
                for (int j = 0; j < rowPrimes.size(); j++) {
                    zigzagArray[range][j] = rowPrimes.get(j);
                }
            } else {
                // Fill row right to left
                for (int j = 0; j < rowPrimes.size(); j++) {
                    zigzagArray[range][9 - j] = rowPrimes.get(j);
                }
            }
        }

        // Printing the zigzag array
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                if (zigzagArray[i][j] != 0) {
                    System.out.print(zigzagArray[i][j] + "\t");
                }
            }
            System.out.println();
        }
    }
}
