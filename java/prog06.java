import java.util.Scanner;

class account {
    int account_no;
    int balance;
    String holder_name;
    int deposit;

    public account() {
        account_no = 0;
        holder_name = "null";
        balance = 0;
        deposit = 0;
    }

    public account(int account_no, int balance, String holder_name) {
        this.account_no = account_no;
        this.balance = balance;
        this.holder_name = holder_name;
        System.out.println("holder name is " + holder_name);
        System.out.println("A/c is " + account_no);
        System.out.println("deposit is 0");
        System.out.println("balance is :" + balance);
        System.out.println("\n");
    }

    public void dt(int d) {
        this.deposit = d;
    }

    public int getbal() {
        System.out.println("deposit is " + deposit);
        return deposit;
    }
}

public class prog06 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        account A = new account();
        account B = new account();

        A = new account(23252523, 233, "harry");
        B = new account(23252523, 233, "harry");

        int dep;
        dep = sc.nextInt();
        A.dt(dep);
        System.out.println("Total balance is " + (A.getbal() + A.balance));
        sc.close();
    }
}