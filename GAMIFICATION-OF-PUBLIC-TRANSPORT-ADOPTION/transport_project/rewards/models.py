
# Create your models here.
from django.db import models
from django.conf import settings
class Reward(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    tokens = models.IntegerField(default=0)
    total_kms = models.FloatField(default=0.0)
    carbon_saved_kg = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.user.email} – {self.tokens} tokens"

class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(upload_to='badges/', null=True, blank=True)

    def __str__(self):
        return self.name

