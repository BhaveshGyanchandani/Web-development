import java.util.Scanner;

class sort {
    static void sorting(int[] integer) {
        int temp;
        for (int i = 0; i < 10; i++) {
            for (int j = i + 1; j < 10; j++) {
                if (integer[i] > integer[j]) {
                    temp = integer[i];
                    integer[i] = integer[j];
                    integer[j] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int i;
        Scanner sc = new Scanner(System.in);
        int[] input = new int[10];
        for (i = 0; i < 10; i++) {
            System.out.print("the " + i + 1 + " digit is : ");
            input[i] = sc.nextInt();
        }

        sorting(input);

        System.out.println("the sorted array is : ");
                for (i = 0; i < 10; i++) {
                    System.out.println(i + 1 + "th digit is : " + input[i]);
                }
                
        sc.close();

    }
}