from rest_framework import serializers
from .models import BusRoute, Bus, Ride, Ticket, RideBooking

class BusRouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusRoute
        fields = '__all__'

class BusSerializer(serializers.ModelSerializer):
    route = BusRouteSerializer()
    class Meta:
        model = Bus
        fields = '__all__'

class RideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ride
        fields = '__all__'

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'

class RideBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = RideBooking
        fields = '__all__'
        read_only_fields = ['ticket_id', 'is_validated', 'validation_status', 'rejection_reason']
