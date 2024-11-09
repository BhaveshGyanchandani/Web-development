def reverse_lines(filename):
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()
        for line in lines:
            print(line.strip()[::-1])
    except FileNotFoundError:
        print(f"The file {filename} does not exist.") 

reverse_lines("E:\\web dev backup\\python\\filename.txt")