
import java.util.Scanner;

class A implements Runnable {

    int j = 0;

    public A(Runnable r, string name) {
        super(r, name);
    }

}

public class thread {

    public static void main(String[] args) {

        A t = new A();
        Thread t = new Thread(t);

    }
}
