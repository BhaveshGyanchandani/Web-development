import java.util.Scanner;

class Person{
    int age;
    String name;

    public Person() {
        age = 0;
        name = "null";
       

    }

    public Person(int age, String name) {
        this.name = name;
        this.age = age;
        System.out.println("age is :" +age);
        System.out.println("name is " + name);
        System.out.println("\n");
    }

}

public class prog07 {
    public static void main(String[] args) {
        int temp;
        int[] Rage = new int[10];
        String[] Rname = new String[10];
        
        Scanner sc=new Scanner(System.in);

        Person[] per = new Person[10];

        for (int i = 0; i < 2; i++) {
            System.out.println("enter name ");
            Rname[i] = sc.nextLine();
            System.out.println("enter age ");
            Rage[i] = sc.nextInt();
            sc.nextLine();

            per[i] = new Person(Rage[i],Rname[i]);
        }

        for (int i = 0; i <2; i++){
            for(int j= i+1;j<2;j++) {
                if(per[i].age<per[j].age){
                    temp=per[i].age;
                    per[i].age=per[j].age;
                    per[j].age=temp;

                }   
            }

        }
        
        System.out.println("the elder men is " + per[0].age);


        sc.close();
    }
}