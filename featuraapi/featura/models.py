from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    img = models.ImageField(upload_to="post/images/", null=True, blank=True)
    content = models.TextField()
    created_at = models.DateTimeField("date published")
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)

    def total_votes(self):
        return self.upvotes.count() + self.downvotes.count()
    
class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField("date published")
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)

class Vote(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)
    vote_type = models.CharField(max_length=10)