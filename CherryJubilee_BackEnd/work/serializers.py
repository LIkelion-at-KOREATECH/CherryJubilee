from .models import Work
from rest_framework import serializers


class WorkSerializer(serializers.ModelSerializer) :

    #author_name = serializers.ReadOnlyField(source='author.username')
    class Meta :
        model = Work
        fields = ('pk','date','startTime','endTime','author','hour','minute','salary','day')
        #print("this is serializer")
        #fields = '__all__'

    
   
