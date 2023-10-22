from rest_framework import serializers
from .models import Post, Comment, Vote
from django.contrib.auth.models import User
from django.utils import timezone

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'id')

class PostSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    author = UserSerializer()
    created_at = serializers.DateTimeField(required=False)
    class Meta:
        model = Post
        fields = ('pk', 'title', 'content', 'image_url', 'created_at', 'author', 'upvotes', 'downvotes')

    def get_image_url(self, post):
        request = self.context.get('request')
        image_url = post.img.url
        return request.build_absolute_uri(image_url)

    def validate_author(self, value):
        print(f"validate_author value: {value}")

    def create(self, validated_data):
        print(f"create validated data: {validated_data}")
        if 'created_at' not in validated_data:
            validated_data['created_at'] = timezone.now() 
        if 'author' not in validated_data:
            validated_data['author'] = self.context['request'].user  # Set author to the logged-in user
        if 'upvotes' not in validated_data:
            validated_data['upvotes'] = 0  # Set upvotes to 0
        if 'downvotes' not in validated_data:
            validated_data['downvotes'] = 0  # Set downvotes to 0

        post = Post.objects.create(**validated_data)
        return post

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('content', 'created_at', 'author', 'post')

class VoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vote
        fields = ('user', 'post', 'vote_type')