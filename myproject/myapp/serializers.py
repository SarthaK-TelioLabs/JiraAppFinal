from rest_framework import serializers
from .models import QuerySolution

class QuerySolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuerySolution
        fields = ['query', 'solution']
