from django.shortcuts import render
from .models import IPO

def home_view(request):
    upcoming = IPO.objects.filter(status='upcoming')
    ongoing = IPO.objects.filter(status='ongoing')
    listed = IPO.objects.filter(status='listed')
    return render(request, 'ipo/home.html', {
        'upcoming_ipos': upcoming,
        'ongoing_ipos': ongoing,
        'listed_ipos': listed,
    })
