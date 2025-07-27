
from django.contrib import admin
from django.urls import include, path
from django.http import JsonResponse
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/rides/',include('rides.urls')),
    path('api/rewards/', include('rewards.urls')),
    path('api/users/', include('users.urls')),
    path("", lambda request: JsonResponse({"message": "Welcome to the Public Transport Gamification API"})),
]
