from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class HeroSection(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    image = models.ImageField(null = True,blank=True)
    github = models.CharField(max_length=200)
    twitter = models.CharField(max_length=200)
    insta = models.CharField(max_length=200)
    facebook = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="HeroSection")
    
    def __str__(self):
        return self.fname



class AboutSection(models.Model):
    disc = models.TextField()
    created_at =  models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="AboutSection")
    
    def __str__(self):
        return self.desc
    
    
class SkillsSection(models.Model):
    tittle = models.CharField(max_length=150)
    list_of_skill = models.JSONField(default=list)
    created_at =  models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="skills")
    
    
    