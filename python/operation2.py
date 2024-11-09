#tuple

my_tuple = (1, 2, 3, 4, 5)
print("Created tuple:", my_tuple)
first_element = my_tuple[0]
print("First element:", first_element)
sub_tuple = my_tuple[1:4]
print("Sliced tuple (from index 1 to 3):", sub_tuple)
new_tuple = my_tuple + (6, 7, 8)
print("Concatenated tuple:", new_tuple)
repeated_tuple = my_tuple * 2
print("Repeated tuple:", repeated_tuple)

#dictionary

my_dict = {'a': 1, 'b': 2, 'c': 3}
print("Created dictionary:", my_dict)
value_a = my_dict['a']
print("Value for key 'a':", value_a)
new_dict = {'d': 4, 'e': 5}
my_dict.update(new_dict)
print("Concatenated dictionary:", my_dict)


#sets

my_set = {1, 2, 3, 4, 5}
print("Created set:", my_set)
new_set = {6, 7, 8}
concatenated_set = my_set.union(new_set)
print("Concatenated set:", concatenated_set)
