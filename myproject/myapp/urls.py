from django.urls import path
from .views import QuerySolutionAPIView

urlpatterns = [
    path('find-solution/', QuerySolutionAPIView.as_view(), name='find-solution'),
]
