#include<iostream>
#include<cmath>

class Shape {
protected:
    std::string name;
    int sides;

public:
    // Constructor
    Shape(const std::string& n, int s) : name(n), sides(s) {}

    // Function to compute the area (virtual, as it will be overridden)
    virtual double compute_area() const = 0;

    // Function to display details
    void display_details() const {
        std::cout << "Shape: " << name << std::endl;
        std::cout << "Sides: " << sides << std::endl;
    }
};

class Triangle : public Shape {
private:
    double side1, side2, side3;

public:
    // Constructor
    Triangle(double s1, double s2, double s3) : Shape("Triangle", 3), side1(s1), side2(s2), side3(s3) {}

    // Override compute_area() for Triangle
    double compute_area() const override {
        // Heron's formula to compute the area of a triangle
        double s = (side1 + side2 + side3) / 2;
        double area = sqrt(s * (s - side1) * (s - side2) * (s - side3));
        return area;
    }

    // Override display_details() for Triangle
    void display_details() const {
        Shape::display_details();
        std::cout << "Side1: " << side1 << std::endl;
        std::cout << "Side2: " << side2 << std::endl;
        std::cout << "Side3: " << side3 << std::endl;
        std::cout << "Area: " << compute_area() << std::endl;
    }
};

class Square : public Shape {
private:
    double side;

public:
    // Constructor
    Square(double s) : Shape("Square", 4), side(s) {}

    // Override compute_area() for Square
    double compute_area() const override {
        // Area of a square is side squared
        double area = side * side;
        return area;
    }

    // Override display_details() for Square
    void display_details() const {
        Shape::display_details();
        std::cout << "Side: " << side << std::endl;
        std::cout << "Area: " << compute_area() << std::endl;
    }
};

int main() {
    // Example usage
    Triangle triangle(3, 4, 5);
    triangle.display_details();

    std::cout << std::endl;

    Square square(4);
    square.display_details();

    return 0;
}