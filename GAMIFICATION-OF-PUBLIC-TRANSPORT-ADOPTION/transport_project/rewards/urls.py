from django.urls import path
from .views import UserRewardView
from .views import dashboard_view
urlpatterns = [
    path('me/', UserRewardView.as_view()),
    path('me/', dashboard_view),
    
]
