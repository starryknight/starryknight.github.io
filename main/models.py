from django.db import models

# Create your models here.
class Project(models.Model):
    image = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    summary = models.CharField(max_length=1000)

class Article(models.Model):
    image = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    content = models.CharField(max_length=3000)

    def __str__(self):
        return self.subject

class Comment(models.Model):
    comments = models.CharField(max_length=255)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.comments