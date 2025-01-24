from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id' ,'host','code','guest_can_pause' ,
                  'created_at','vote_to_skip' ) 
        
        
        