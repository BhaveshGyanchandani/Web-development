def compute_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def compute_lcm(a, b):
    return (a * b) // compute_gcd(a, b)

# Example usage
num1 = 12
num2 = 15

gcd = compute_gcd(num1, num2)
lcm = compute_lcm(num1, num2)

