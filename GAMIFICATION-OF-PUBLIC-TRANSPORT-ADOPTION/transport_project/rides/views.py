from django.shortcuts import render
from rest_framework import generics, permissions
from .models import BusRoute, Bus, Ride, Ticket, RideBooking
from .serializers import BusRouteSerializer, BusSerializer, RideSerializer, TicketSerializer, RideBookingSerializer
from rewards.models import Reward
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils import timezone

class BusRouteListView(generics.ListCreateAPIView):
    queryset = BusRoute.objects.all()
    serializer_class = BusRouteSerializer

class BusListView(generics.ListAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class BookRideView(generics.CreateAPIView):
    queryset = Ride.objects.all()
    serializer_class = RideSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        ride = serializer.save(user=user)
        Ticket.objects.create(ride=ride)

        distance = ride.bus.route.distance_km
        tokens_earned = int(distance * 3)
        carbon_saved = distance * 0.12

        reward, created = Reward.objects.get_or_create(user=user)
        reward.tokens += tokens_earned
        reward.total_kms += distance
        reward.carbon_saved_kg += carbon_saved
        reward.save()

class UserRidesView(generics.ListAPIView):
    serializer_class = RideSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Ride.objects.filter(user=self.request.user)

class BookRideBookingView(generics.CreateAPIView):
    queryset = RideBooking.objects.all()
    serializer_class = RideBookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        ride_booking = serializer.save(user=self.request.user)
        ride_booking.ticket_id = ride_booking.generate_ticket_id()
        ride_booking.save()

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def verify_ticket(request):
    ticket_id = request.data.get('ticket_id')

    if not ticket_id:
        return Response({"error": "Ticket ID is required."}, status=status.HTTP_400_BAD_REQUEST)


    import re
    pattern ="/^[0-9]{7}$/"
    if not re.match(pattern, ticket_id):
        return Response({"error": "Invalid Ticket ID format."}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"message": "Ticket submitted successfully."}, status=status.HTTP_200_OK)
