from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import HeroSerializer,SkillsSerializer,AboutSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import HeroSection,AboutSection,SkillsSection
from rest_framework.response import Response
from rest_framework import generics, status, pagination
from rest_framework.exceptions import NotFound
# Create your views here.
from rest_framework.permissions import BasePermission

class CustomIsAuthenticated(BasePermission):
    def has_permission(self, request, view):
        token = request.headers.get('Authorization', None)
        if token:
            print(f"Token: {token}") 
        else:
            print("No token provided")
        return request.user and request.user.is_authenticated


class HeroCreate(generics.ListCreateAPIView):
    serializer_class = HeroSerializer
    permission_classes = [CustomIsAuthenticated]   

    
    def get_queryset(self):
        user = self.request.user
        return HeroSection.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            
        else:
            print(serializer.errors)


class SkillsCreate(generics.ListCreateAPIView):
    serializer_class = SkillsSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        # returning the list of note that user has designed
        return SkillsSection.objects.filter(author=user) 
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            
        else:
            print(serializer.errors) 
            
            
class UpdateSkills(generics.RetrieveUpdateAPIView):
    serializer_class = SkillsSerializer
    queryset = SkillsSection.objects.all()
    lookup_field = 'id'

    def post(self, request, id, *args, **kwargs):
        try:
            # user = User.objects.get(id=id)
            skill = SkillsSection.objects.get(id=id)
            
            
            x = request.data.get('tittle')
            y = request.data.get('list_of_skill')
           
            if x:
               skill.tittle = x
               
            if y:
                skill.list_of_skill = y
                skill.save()
            
            serializer = SkillsSerializer(skill)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except SkillsSection.DoesNotExist:
            return Response({"error": "Skills not found"}, status=status.HTTP_404_NOT_FOUND)
 
    