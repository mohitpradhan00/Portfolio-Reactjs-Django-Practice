from django.contrib.auth.models import User
from rest_framework import serializers
from .models import HeroSection,AboutSection,SkillsSection

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = "__all__"
        extra_kwargs = {"author": {"read_only": True}} 
        


class SkillsSerializer(serializers.ModelSerializer):
     class Meta:
         model = SkillsSection
         fields = "__all__"
         extra_kwargs = {"author": {"read_only": True}}
         

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSection
        fields = "__all__"
        extra_kwargs = {"author": {"read_only": True}}