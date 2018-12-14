from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('articles', views.ArticleView)
router.register('comments', views.CommentView)
router.register('projects', views.ProjectView)


urlpatterns = [
    path('', include(router.urls))
]