from django.contrib import admin

# Register your models here.
# rewards/admin.py
from django.contrib import admin
from .models import Reward, Badge

admin.site.register(Reward)
admin.site.register(Badge)
    