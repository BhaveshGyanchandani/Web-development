#include<iostream>
#include<string>

class Employee {
private:
    char name[50];
    int age;
    float salary;

public:
    void input() {
        std::cout << "Enter name: ";
        std::cin.ignore(); // To clear the newline character from the buffer
        std::cin.getline(name, sizeof(name));

        std::cout << "Enter age: ";
        std::cin >> age;

        std::cout << "Enter salary: ";
        std::cin >> salary;
    }

    void displaystaff(int serialNumber) const {
        std::cout     <<serialNumber<<"         "<<name<<"           "<<age<<"         "<<salary<< std::endl;
        
        
       
    }
void displayfaculty(int serialNumber) const {
        std::cout     <<serialNumber<<"         "<<name<<"            "<<age<<"           "<<salary<< std::endl;
        
}
};

int main() {
    const int facultyCount = 2;
    const int staffCount = 2;

    Employee faculty[facultyCount];
    Employee staff[staffCount];

    // Input records for faculty
    std::cout << "Enter records for faculty:" << std::endl;
    for (int i = 0; i < facultyCount; ++i) {
        faculty[i].input();
    }

    // Input records for staff
    std::cout << "Enter records for staff:" << std::endl;
    for (int i = 0; i < staffCount; ++i) {
        staff[i].input();
    }

    // Display records with serial numbers
    std::cout << "Employee records:" << std::endl<<std::endl;
        std::cout << "-------------------------" << std::endl;
     std::cout<<"data of faculty"<<std::endl;
        std::cout    <<"Sno.      name       age        salary"<< std::endl;
    for (int i = 0; i < facultyCount; ++i) {
        faculty[i].displaystaff(i + 1);
    }

        std::cout << "-------------------------" << std::endl;
        std::cout<<"data of staff"<<std::endl;
        std::cout    <<"Sno.      name        age         salary"<< std::endl;
    for (int i = 0; i < staffCount; ++i) {
        staff[i].displayfaculty(facultyCount + i + 1);
    }

    return 0;
}