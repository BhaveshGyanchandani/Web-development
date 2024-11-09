
class Person {

    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

class Teacher extends Person {

    private String post;

    public Teacher(String name, int age, String post) {
        super(name, age);
        this.post = post;
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Post: " + post);
    }
}

class Student extends Person {

    private int standard;

    public Student(String name, int age, int standard) {
        super(name, age);
        this.standard = standard;
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Standard: " + standard);
    }
}

public class prog13 {

    public static void main(String[] args) {

        Teacher teacher = new Teacher("Alice", 35, "Professor");
        Student student = new Student("Bob", 16, 10);

        System.out.println("Teacher Details:");
        teacher.display();

        System.out.println();

        System.out.println("Student Details:");
        student.display();
    }
}
