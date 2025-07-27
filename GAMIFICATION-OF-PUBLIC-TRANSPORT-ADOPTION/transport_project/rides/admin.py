
from django.contrib import admin
from .models import RideBooking

@admin.register(RideBooking)
class RideBookingAdmin(admin.ModelAdmin):
    list_display = ['user', 'ticket_id', 'distance_km', 'validation_status', 'is_validated']
    list_filter = ['validation_status', 'is_validated']
    search_fields = ['ticket_id', 'user__email']
    readonly_fields = ['ticket_id', 'user', 'distance_km', 'source', 'destination', 'date']
