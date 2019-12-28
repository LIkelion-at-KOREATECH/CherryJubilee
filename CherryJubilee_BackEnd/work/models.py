from django.db import models
from django.conf import settings

class Work(models.Model) :
    author = models.ForeignKey(settings.AUTH_USER_MODEL,default=1,on_delete=models.CASCADE)
    date = models.DateField()
    startTime = models.TimeField() # 근무 시작 ex) 
    endTime = models.TimeField()   # 근무 끝 ex) 13:05:08
    hour = models.IntegerField(null=True,blank=True) # 시 ex) 4시간
    minute = models.IntegerField(null=True,blank=True) # 분 ex) 33분
    salary = models.IntegerField(null=True,blank=True)
    day = models.TextField(max_length=10,null=True,blank=True)

