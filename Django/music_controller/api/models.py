import string , random
from django.db import models

def generate_unique_code():
    length = 6
    
    while(True):
        code = ''.join(random.choices(string.ascii_uppercase , k=length)) #generates a random code with uppercase nly
        
        if Room.objects.filter(code=code).count() == 0:
             break
         
    return code
        
    
        

# Create your models here.

class Room(models.Model):
    code = models.CharField(max_length=8 , default="" , unique=True)
    host = models.CharField(max_length=50 , default="" , unique=True)
    guest_can_pause = models.BooleanField(null=False,default=False)
    vote_to_skip = models.IntegerField(null=False , default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    
    