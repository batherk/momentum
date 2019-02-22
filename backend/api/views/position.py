from api.serializers.position import *
from api.models.position import *
from rest_framework import viewsets

import api.permissions as custom_perm


class PositionView(viewsets.ModelViewSet):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer
    permission_classes = [custom_perm.IsGet, custom_perm.IsApplicant]