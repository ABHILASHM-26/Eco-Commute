from django.db import models
from django.conf import settings
import uuid
import random
import string
from django.contrib.auth import get_user_model
User = get_user_model()

class BusRoute(models.Model):
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    distance_km = models.FloatField()
    estimated_time_min = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.origin} ➡ {self.destination}"

class Bus(models.Model):
    route = models.ForeignKey(BusRoute, on_delete=models.CASCADE)
    bus_number = models.CharField(max_length=20)
    capacity = models.IntegerField(default=40)
    current_lat = models.FloatField(null=True, blank=True)
    current_lng = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.bus_number} on {self.route}"

class Ride(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    booked_at = models.DateTimeField(auto_now_add=True)
    seat_number = models.PositiveIntegerField(null=True, blank=True)
    distance = models.FloatField()
    carbon_saved = models.FloatField(default=0) 

    def __str__(self):
        return f"Ride by {self.user.email} on {self.bus}"

class Ticket(models.Model):
    ride = models.OneToOneField(Ride, on_delete=models.CASCADE)
    ticket_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    validated = models.BooleanField(default=False)

    def __str__(self):
        return f"Ticket {self.ticket_id} - Validated: {self.validated}"

class RideBooking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    source = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    distance_km = models.FloatField()
    date = models.DateTimeField(auto_now_add=True)
    ticket_id = models.CharField(max_length=12, unique=True, blank=True)
    is_validated = models.BooleanField(default=False)
    validation_status = models.CharField(
        max_length=10,
        choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')],
        default='pending'
    )
    rejection_reason = models.TextField(blank=True, null=True)

    def generate_ticket_id(self):
        """Generate a professional, unique ticket ID based on source, destination, time"""
        random_str = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
        formatted_source = ''.join(e for e in self.source if e.isalnum())[:3].upper()
        formatted_destination = ''.join(e for e in self.destination if e.isalnum())[:3].upper()
        return f"{formatted_source}{formatted_destination}{random_str}"

    def save(self, *args, **kwargs):
        if not self.ticket_id:
            self.ticket_id = self.generate_ticket_id()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.email} - {self.ticket_id}"
