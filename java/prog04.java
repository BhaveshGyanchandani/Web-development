import java.util.Scanner;

public class prog04 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int i, key, p = 0, in, j, temp;

        int[] input = new int[10];
        for (i = 0; i < 10; i++) {
            System.out.print("the " + (i + 1) + " digit is : ");
            input[i] = sc.nextInt();
        }

        System.out.println("1.Display");
        System.out.println("2.Search");
        System.out.println("3.Sort");
        System.out.println("4.reverse");
        System.out.println("5.Find maximum");

        System.out.print("enter case : ");
        in = sc.nextInt();
        switch (in) {

            case 1:
                System.out.println("digits are : ");
                for (i = 0; i < 10; i++) {
                    System.out.println(i + 1 + "th digit is : " + input[i]);
                }
                break;

            case 2:
                key = sc.nextInt();
                for (i = 0; i < 10; i++) {
                    if (key == input[i]) {
                        p = 1;
                        break;
                    } else {
                        p = 0;
                    }
                }

                if (p == 1) {
                    System.out.println("key found");
                } else {
                    System.out.println("key not found");
                }
                break;

            case 3:

                for (i = 0; i < 10; i++) {
                    for (j = i + 1; j < 10; j++) {
                        if (input[i] > input[j]) {
                            temp = input[i];
                            input[i] = input[j];
                            input[j] = temp;
                        }
                    }
                }

                System.out.println("the sorted array is : ");
                for (i = 0; i < 10; i++) {
                    System.out.println(i + 1 + "th digit is : " + input[i]);
                }
                break;

            case 4:

                for (i = 0; i < 10; i++) {
                    for (j = i + 1; j < 10; j++) {
                        if (input[i] < input[j]) {
                            temp = input[i];
                            input[i] = input[j];
                            input[j] = temp;
                        }
                    }
                }

                System.out.println("the reverse of array is : ");
                for (i = 0; i < 10; i++) {
                    System.out.println(i + 1 + "th digit is : " + input[i]);
                }

                break;

            case 5:
                for (i = 0; i < 10; i++) {
                    for (j = i + 1; j < 10; j++) {
                        if (input[i] > input[j]) {
                            temp = input[i];
                            input[i] = input[j];
                            input[j] = temp;
                        }
                    }
                }

                System.out.println("the maximum number is : " + input[9]);
                break;

            default:
                System.out.println("no case selected !!");
                break;
        }

        sc.close();
    }
}
