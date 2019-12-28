from rest_framework.routers import DefaultRouter
from django.urls import path, include
from work import views

router = DefaultRouter()
router.register(r'work',views.PostViewSet)

urlpatterns = [
    path(r'',include(router.urls))
]