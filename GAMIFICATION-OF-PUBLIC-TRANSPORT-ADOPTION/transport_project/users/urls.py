from django.urls import path
from .views import RegisterView, LoginView, SendOTPView, VerifyOTPView, UserProfileView
from .views import LeaderboardView
from .views import MyTokenRefreshView
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view()),
    path('send-otp/', SendOTPView.as_view()),
    path('verify-otp/', VerifyOTPView.as_view()),
    path('leaderboard/', LeaderboardView.as_view(), name='leaderboard'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('refresh/', MyTokenRefreshView.as_view(), name='token_refresh'),
]
