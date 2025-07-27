from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('routes/', BusRouteListView.as_view()),
    path('buses/', BusListView.as_view()),
    path('book/', BookRideView.as_view()),
    path('my-rides/', UserRidesView.as_view()),
    path('ride-booking/', BookRideBookingView.as_view()),  
    path('verify-ticket/', views.verify_ticket, name='verify_ticket'),
]
