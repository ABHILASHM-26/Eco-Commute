from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .models import RideBooking

@receiver(post_save, sender=RideBooking)
def send_rejection_email(sender, instance, created, **kwargs):
    if not created and instance.validation_status == 'rejected':
        subject = f"Ticket ID {instance.ticket_id} Rejected"
        message = (
            f"Dear {instance.user.first_name or instance.user.username},\n\n"
            f"Your ticket with ID {instance.ticket_id} was rejected.\n\n"
            f"Reason: {instance.rejection_reason or 'No reason provided.'}\n\n"
            "If you think this was a mistake, please contact support."
        )
        send_mail(
            subject,
            message,
            'noreply@tsrtcgamify.com',
            [instance.user.email],
            fail_silently=False,
        )
