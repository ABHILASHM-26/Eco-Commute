from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Reward
from .serializers import RewardSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import BadgeSerializer
from users.serializers import UserProfileSerializer

class UserRewardView(generics.RetrieveAPIView):
    serializer_class = RewardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return Reward.objects.get(user=self.request.user)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_view(request):
    profile = request.user.userprofile
    badges = profile.badges.all()

    data = {
        "total_rides": profile.total_rides,
        "total_km": profile.total_km,
        "tokens": profile.tokens,
        "co2_saved": profile.co2_saved,
        "badges": BadgeSerializer(badges, many=True).data
    }

    return Response(data)
