from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room
# Create your views here.

# def main(request):
#     return HttpResponse("helllo world")

# def home(request):
#     return HttpResponse("wlcm to hoome")

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
    