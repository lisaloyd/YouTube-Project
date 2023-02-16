from rest_framework import serializers
from .models import Reply

class  ReplySerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    def get_username(self, reply):
        return reply.user.username 

    class Meta:
        model = Reply
        fields = ['id', 'text', 'comment_id', 'username']
        depth = 1