from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('posts/', views.paginated_posts, name='paginated-posts'),
    path('posts/create/', views.create_post, name='create-post'),
    path('posts/<int:post_id>/', views.view_post, name='view-post'),
    path('posts/<int:post_id>/upvote/', views.make_upvote, name='make-upvote'),
    path('posts/<int:post_id>/downvote/', views.make_downvote, name='make-downvote'),
    path('token/', 
          jwt_views.TokenObtainPairView.as_view(), 
          name ='token_obtain_pair'),
     path('token/refresh/', 
          jwt_views.TokenRefreshView.as_view(), 
          name ='token_refresh')
]
