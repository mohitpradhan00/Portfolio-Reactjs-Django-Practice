from django.urls import path
from . import views

urlpatterns = [
    path("hero/",views.HeroCreate.as_view(),name="hero"),
    path("skills/",views.SkillsCreate.as_view(),name="skills"),
    path("skills/update/<int:id>/",views.UpdateSkills.as_view(),name="update-skills"),
]


