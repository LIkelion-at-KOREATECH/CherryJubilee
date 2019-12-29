from django.db import models

# Create your models here.
class Post(models.Model):
    date = models.DateField()
    startTime = models.TimeField() # 근무 시작 ex) 
    endTime = models.TimeField()   # 근무 끝 ex) 13:05:08
    hour = models.IntegerField(null=True,blank=True) # 시 ex) 4시간
    minute = models.IntegerField(null=True,blank=True) # 분 ex) 33분
    salary = models.IntegerField(null=True,blank=True)
    day = models.TextField(max_length=10,null=True,blank=True)
