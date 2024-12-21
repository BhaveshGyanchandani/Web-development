
n = int(input("Enter the size of the array: "))
arr = list(map(int, input("Enter the array elements: ").split()))


frequency = {}

for num in arr:
    if num in frequency:
        frequency[num] += 1
    else:
        frequency[num] = 1

max_freq = max(frequency.values())

candidates = [key for key, value in frequency.items() if value == max_freq]

mystic_majority = min(candidates)

print(mystic_majority)
