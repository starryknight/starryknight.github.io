from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArticleSerializer, CommentSerializer, ProjectSerializer
from .models import Comment, Article, Project
# Create your views here.

class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer