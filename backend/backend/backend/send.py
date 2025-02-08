import requests
from django.http import JsonResponse

from backend.query import find_places, place_filter, photo_processing

PLACES_API_KEY = 'AIzaSyADCC6No81py9j21Bn4jpTvkzfbX-3Nl4U'
SEARCH_API_KEY = 'AIzaSyAo6mmyusNoSHvGY5NPpc1hBu0vZ3LLRIc'
SEARCH_ENGINE_ID = '2745237fd34ea4519'
latitude = 41.874734138641095
longitude =  -87.65149309002025
threshold = 40000

def getResponse(inputQuery):
    x = find_places(inputQuery, PLACES_API_KEY, latitude, longitude, 20)
    y = place_filter(x, SEARCH_API_KEY, SEARCH_ENGINE_ID, 40000)
    z = photo_processing(y, PLACES_API_KEY)
    return z

def sendResponse(request):
    response = getResponse("italian lunch")
    print(request)
    return JsonResponse(response, safe=False)
