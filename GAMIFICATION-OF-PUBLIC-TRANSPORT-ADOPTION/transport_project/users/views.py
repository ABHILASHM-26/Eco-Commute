from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken
import random
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import LeaderboardUserSerializer
from rest_framework import status
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from users.models import UserProfile
from rest_framework.permissions import AllowAny
from rest_framework.serializers import ModelSerializer, EmailField, CharField

User = get_user_model()

class LeaderboardView(APIView):
    def get(self, request):
        top_users = User.objects.order_by('-points')[:10]
        data = [
            {
                "id": user.id,
                "username": user.username,
                "points": user.points
            }
            for user in top_users
        ]
        return Response(data, status=status.HTTP_200_OK)

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# Serializer for User Registration
class RegisterSerializer(ModelSerializer):
    email = EmailField(required=True)
    name = CharField(required=True)
    password = CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ['email', 'name', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password']
        )
        # Create user profile
        UserProfile.objects.create(user=user)
        return user

# API View for Registration
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User registered successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        tokens = get_tokens_for_user(user)
        return Response({'token': tokens})

class SendOTPView(APIView):
    def post(self, request):
        email = request.data.get('email')
        user = User.objects.filter(email=email).first()
        if not user:
            return Response({"error": "User not found"}, status=404)

        otp = str(random.randint(100000, 999999))
        user.otp = otp
        user.save()
        # Simulate sending OTP
        print(f"OTP for {email} is {otp}")
        return Response({"message": "OTP sent"})

class VerifyOTPView(APIView):
    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')
        user = User.objects.filter(email=email, otp=otp).first()
        if not user:
            return Response({"error": "Invalid OTP"}, status=400)
        user.otp_verified = True
        user.save()
        return Response({"message": "OTP verified"})
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenRefreshView

class MyTokenRefreshView(TokenRefreshView):
    pass
  