import re

def is_valid_mobile_number(number):
    pattern = r'^\d{10}$'
    return re.match(pattern, number) is not None

mobile_number = "1234567890"
print(is_valid_mobile_number(mobile_number))


def is_valid_url(url):
 return bool(re.match(r'^(https?|ftp)://[^\s/$.?#].[^\s]*$', url))

url="https://www.google.com"
print(is_valid_url(url))

def is_valid_c_identifier(identifier):
 return bool(re.match(r'^[a-zA-Z_][a-zA-Z0-9_]*$', identifier))

iden="validIdentifier123"
print(is_valid_c_identifier(iden))

def is_valid_date(date):
 return bool(re.match(r'^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(\d{4})$', date))

print(is_valid_date("31/12/2020"))


def is_valid_time(time):
 return bool(re.match(r'^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$', time))

print(is_valid_time("23:59:59"))

