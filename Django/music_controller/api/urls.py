
from django.urls import path
from .views import RoomView

urlpatterns = [
#     path('' , main),
#     path('home', home)
    path('home' , RoomView.as_view())
    # .as_view tells ......give me this RoomView class and give me its view used for classes
 ]