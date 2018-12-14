from django.contrib import admin
from .models import Project, Article, Comment
# Register your models here.
admin.site.register([Project, Article, Comment])