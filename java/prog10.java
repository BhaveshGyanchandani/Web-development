import java.util.Scanner;

class Number{

    int number;
    static int count;
    Number(){};
    Number(int number){
        count++;
        this.number=number;
        
    }
    public static void count(){
        System.out.println("no. of instances are " + count);
    }

}


public class prog10 {


    public static void main(String[] args){
        int number;
        Scanner sc=new Scanner(System.in);
        
        System.out.println("enter no. of instances : ");
        int counts=sc.nextInt();
        Number[] num=new Number[counts];
        for(int i=0;i<counts;i++){
            System.out.println("enter the number : ");
            number=sc.nextInt();
            num[i]=new Number(number);
        }

        num[1].count();

        for(int i=0;i<counts;i++){
            System.out.println("the number given to instance"+ (i+1)+ " is :"+ num[i].number);
        }

        sc.close();
    }
}