from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import authentication
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from datetime import datetime

from .models import Post, Comment, Vote
from .serializer import PostSerializer, CommentSerializer, VoteSerializer, UserSerializer
from django.contrib.auth.models import User

def index(request):
    return HttpResponse("Welcome to Featura front page")

@api_view(['GET'])
def paginated_posts(request):
    print('posts function called')
    page_number = request.GET.get('page', 1)
    per_page = 10  # Number of posts per page

    posts = Post.objects.all()
    paginator = Paginator(posts, per_page)
    
    try:
        page = paginator.page(page_number)
    except EmptyPage:
        return Response({'posts': [], 'has_more': False})

    serializer = PostSerializer(page, many=True)
    
    data = {
        'posts': serializer.data,
        'has_more': page.has_next(),
    }
    
    return Response(data)

@api_view(['POST'])
def create_post(request):
    serializer = PostSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save(author=request.user, created_at=datetime.now().isoformat())
        return Response(serializer.data, status=201)
    
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def view_post(request, post_id):
    try:
        post = Post.objects.get(pk=post_id)
    except Post.DoesNotExist:
        return Response({'detail': 'Post not found'}, status=404)
    
    serializer = PostSerializer(post)
    return Response(serializer.data)
