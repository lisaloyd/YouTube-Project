from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_replies(request, comment_id):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}"
    )
    if request.method == 'GET':
        replies = Reply.objects.filter(comment_id=comment_id)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        reply = ReplySerializer(data=request.data)
        reply.is_valid(raise_exception=True)
        reply.save(user=request.user, comment_id=comment_id)
        return Response(reply.data, status=status.HTTP_201_CREATED)

