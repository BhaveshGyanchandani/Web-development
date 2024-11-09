import re
def is_valid_constant(value):
     return bool(re.match(r'^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$', value))

def is_valid_identifier(identifier):
     return bool(re.match(r'^[a-zA-Z_][a-zA-Z0-9_]*$', identifier))

def is_valid_operator(operator):
    operators = {'+', '-', '*', '/', '%', '++', '--', '=', '==', '!=', '<', '>', '<=',
'>=', '&&', '||', '!', '&', '|', '^', '~', '<<', '>>'}
    return operator in operators

print(is_valid_constant("123"))
print(is_valid_identifier("_var1"))
print(is_valid_operator("+"))