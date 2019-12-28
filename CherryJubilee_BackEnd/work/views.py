from rest_framework import viewsets
from .models import Work
from .serializers import WorkSerializer
# from rest_framework.filters import SearchFilter


from rest_framework import status
from rest_framework import renderers
from rest_framework.decorators import action
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
# Create your views here.

import json

class PostViewSet(viewsets.ModelViewSet) :

    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]

    #filter_backends = [SearchFilter]
    #search_fields = ['date']

    def create(self, request, pk=None) :
        #work = Work.get_object(pk=1)
        #print(work)
        
        #print(data)
        #data['date'] = '2019-01-01'
        #data['startTime'] = '14:25:00'
        #data['endTime'] = '16:50:00'
        
        #print('------------------------------------------')
        #print(data['date'])
        #print(data['startTime'])
        #print(data['endTime'])
        #print(data['author'])

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        startTime = str(data['startTime']).split(':')
        endTime = str(data['endTime']).split(':')

        startHour = int(startTime[0])
        endHour = int(endTime[0])
        startMinute = int(startTime[1])
        endMinute = int(endTime[1])

        if int(startHour > endHour) :
            endHour = endHour + 24
        Hour = endHour - startHour   

        if startMinute > endMinute :
            Hour = Hour - 1
            endMinute = endMinute + 60
        Minute = endMinute - startMinute

        Salary = 8590*(Hour + Minute / 60) # 최저시급 기준 당일 급여
        

        #print('시간 : ',Hour)
        #print('시간 : ',Minute)

        data['hour'] = int(Hour)
        data['minute'] = int(Minute)
        data['salary'] = int(Salary)

        serializeData = {'date': data['date'], 'startTime': data['startTime'], 'endTime': data['endTime'], 'author': 1, 'hour': int(Hour), 'minute': int(Minute), 'salary': int(Salary)}
       
        #print(serializer.validated_data)
        #print(request.POST['date'])
        #print(request.POST['startTime'])
        #print(request.POST['endTime'])
        #return HttpResponse("얍")
        self.perform_create(serializer)
        headers = self.get_success_headers(serializeData)
        return Response(serializeData, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        qs = super().get_queryset()

        # 로그인 된 상태일 경우 해당 user 데이터만 보여줌

        if self.request.user.is_authenticated :
            qs = qs.filter(author = self.request.user)
        else :
            qs = qs.none()
        return qs
    


    @action(detail=True, renderer_classes=[renderers.BrowsableAPIRenderer])
    # 그냥 얍을 띄우는 custom api
    def highlight(self, request, *args, **kwargs):
        qry = Work.objects.all()
        serializer = WorkSerializer(qry,many=True)
        return Response(serializer.data)
   
