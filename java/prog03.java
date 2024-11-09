import  java.util.Scanner;

public class prog03 {
    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);

        float a=sc.nextFloat();
        float b=sc.nextFloat();
        float c=sc.nextFloat();

     if(a>b && a>c){
        System.out.println("a is greater");
     }
     else if(b>a && b>c){
        System.out.println("b is greater");
     }
     else if(c>a && c>b){
        System.out.println("c is greater");
     }
    else{
        System.out.println("all are equal");
    }

            sc.close();
    }
}
