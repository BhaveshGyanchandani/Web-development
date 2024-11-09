def file_statistics(filename):
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()
        num_lines = len(lines)
        num_words = sum(len(line.split()) for line in lines)
        num_chars = sum(len(line) for line in lines)
        print(f"Lines: {num_lines}")
        print(f"Words: {num_words}")
        print(f"Characters: {num_chars}")
    except FileNotFoundError:
        print(f"The file {filename} does not exist.")

file_statistics("E:\\web dev backup\\python\\filename.txt")