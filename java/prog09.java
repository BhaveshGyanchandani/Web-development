import java.util.Scanner;

public class prog09 {

    double Area;
    double s;
     public void area(){
        
    }
    public void area(float  a,float  b){
        Area=a*b;
        System.out.println("area of rectangele is : "+Area);
    }
    public void area(float a){
        Area=a*a;
        System.out.println("area of rectangele is : "+Area);
    }

    public void area(float radius, boolean  isCircle){
        Area=3.14*radius*radius;
        System.out.println("area of circle is : " + Area);
        
    }
    public void area(int a,int b, int c){
        s=(a+b+c)/2;
        Area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
        System.out.println("area of triangle is : " + Area);
        
    }

    public static void main(String[] args){
        

        Scanner sc=new Scanner(System.in);

        prog09 object=new prog09();
        object.area(4,3);
        object.area(4);
        object.area(4,true);
        object.area(6,7,8);

        sc.close();
    }
}