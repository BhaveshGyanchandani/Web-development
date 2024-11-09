
abstract class Shape {

    public abstract double area();
}

class Square extends Shape {

    private double side;

    public Square(double side) {
        this.side = side;
    }

    @Override
    public double area() {
        return side * side;
    }
}

class Rectangle extends Shape {

    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double area() {
        return length * width;
    }
}

class Triangle extends Shape {

    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double area() {
        return 0.5 * base * height;
    }
}

class Circle extends Shape {

    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

public class prog14 {

    public static void main(String[] args) {

        Shape square = new Square(4.0);
        Shape rectangle = new Rectangle(4.0, 6.0);
        Shape triangle = new Triangle(4.0, 6.0);
        Shape circle = new Circle(5.0);

        Shape[] shapes = {square, rectangle, triangle, circle};

        for (Shape shape : shapes) {
            System.out.println("Area: " + shape.area());
        }
    }
}
