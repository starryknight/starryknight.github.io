from rest_framework import serializers
from .models import Comment, Article, Project


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'comments', 'article')

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'image', 'link', 'subject', 'content', 'comments')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'image', 'link', 'summary')