// Define the Payable interface

interface Payable {

    double getPayment();
}

// Implement the Invoice class
class Invoice implements Payable {

    private String itemName;
    private int quantity;
    private double pricePerItem;

    // Constructor
    public Invoice(String itemName, int quantity, double pricePerItem) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.pricePerItem = pricePerItem;
    }

    // Implement the getPayment method
    @Override
    public double getPayment() {
        return quantity * pricePerItem;
    }

    // Override toString method for display
    @Override
    public String toString() {
        return "Invoice [itemName=" + itemName + ", quantity=" + quantity + ", pricePerItem=" + pricePerItem + "]";
    }
}

// Implement the Staff class
class Staff implements Payable {

    private String name;
    private double salary;

    // Constructor
    public Staff(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    // Implement the getPayment method
    @Override
    public double getPayment() {
        return salary;
    }

    // Override toString method for display
    @Override
    public String toString() {
        return "Staff [name=" + name + ", salary=" + salary + "]";
    }
}

// Main class to test the Payable interface polymorphically
public class prog15 {

    public static void main(String[] args) {
        // Create two Invoice objects
        Payable invoice1 = new Invoice("Laptop", 2, 800.0);
        Payable invoice2 = new Invoice("Mouse", 3, 150.0);

        // Create two Staff objects
        Payable staff1 = new Staff("Ajay", 5000.0);
        Payable staff2 = new Staff("amam", 4500.0);

        // Create an array of Payable objects
        Payable[] payables = {invoice1, invoice2, staff1, staff2};

        // Process each Payable object polymorphically
        for (Payable payable : payables) {
            System.out.println(payable.toString());
            System.out.println("Payment: " + payable.getPayment());
            System.out.println();
        }
    }
}
