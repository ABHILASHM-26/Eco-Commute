from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth.models import User
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")
    
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = '__all__'
class LeaderboardUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'points']
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']  
           
