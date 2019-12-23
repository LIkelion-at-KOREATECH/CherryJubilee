from rest_framework.routers import DefaultRouter
from django.urls import path, include
from work import views

router = DefaultRouter()
router.register('work',views.PostViewSet)

urlpatterns = [
    path('',include(router.urls))
]