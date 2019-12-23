from rest_framework import viewsets
from .models import Work
from .serializers import WorkSerializer
from rest_framework.filters import SearchFilter

# Create your views here.
class PostViewSet(viewsets.ModelViewSet) :
    queryset = Work.objects.all()
    serializer_class = WorkSerializer

    filter_backends = [SearchFilter]
    search_fields = ['date']

    def get_queryset(self):
        qs = super().get_queryset()

        # 로그인 된 상태일 경우 해당 user 데이터만 보여줌
        if self.request.user.is_authenticated :
            qs = qs.filter(author = self.request.user)
        else :
            qs = qs.none()
        
        return qs