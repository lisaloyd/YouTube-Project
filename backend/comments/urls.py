from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comments),
    path('videos/<str:video_id>/', views.get_video_comments),
    path('<int:comment_id>/', views.update_comment),
    path('<int:comment_id>/replies/', include("replies.urls")),
]