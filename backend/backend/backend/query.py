import requests
import json
import pprint

def find_places(query, api_key, latitude, longitude, queriedLocations):
    # Text Search URL
    url = 'https://places.googleapis.com/v1/places:searchText'

    # Headers
    headers = {'Content-Type': 'application/json',
                'X-Goog-Api-Key': api_key,
                'X-Goog-FieldMask': "places.displayName,places.formattedAddress,places.location,places.rating,places.priceLevel,places.photos,places.userRatingCount,places.editorialSummary,places.nationalPhoneNumber"}
                # displayName will be main thing on profile
                # formattedAddress goes under, say alignment left; location used to calculate distance, alignment right
                # rating is rating put wherever
                # editorialSummary put under the address as description of the restaurant/location

    data = {"textQuery": query,
            "pageSize": queriedLocations, # [1 to 20, if more, it will return multiple page tokens, which we can navigate to find 21st+ location if need to]
            "locationBias": {
                "circle": {
                    "center": {
                    "latitude": latitude, # [latitude found from current location, or from pre-sequent location],
                    "longitude": longitude # [longitude ^]
                    },
                    "radius": 18000.0 # [in meters, so 12 miles is about 18km, or 18000]
                }
            },
# some other interesting query opts include minRating (0.0->5.0), openNow (boolean), priceLevels [possible values to be found on the API page]
        }
    # print(data)
    response = requests.post(url, headers=headers, json=data)


    # handle exception

    return json.loads(response.text) # I dont remember json module
    # return 0
def construct_query(locationType, locationDesc):
    return "{} {}".format(locationDesc, locationType)

# def auto_select(currLoc, places, distancePrio, pricePrio, ratingPrio, priceWeight):
#     # Automatically select a place to go should the use wish

#     placeSelected = {}
#     weightSelected = 0
#     for place in places:
#         weight = 0

#         # factors considered: distance, priceLevel, Rating, all normalized to 10

#         # for distance, n miles away yields base weight of (using 12 miles as essentially the max distance)
#         # 10 - n*10/12, and let some integral truncation do the work
#         #  e.g. 8 miles away gives it a 4, 1 mile away give it a 10, etc.
#         weight = (10 - 10 * calc_distance(currLoc, places)/12) * distancePrio

#         # for price level, there are only some price levels, so specify that in dict
#         weight += (priceWeight[places[priceLevel]] * pricePrio)

#         # rating is most trivial, scale it to 10
#         weight += places[rating] * 2 * ratingPrio

#         if weight > weightSelected:
#             weightSelected = weight
#             placeSelected = place

#     return placeSelected

def place_filter(response, api_key, search_engine_id, threshold):
    result = []
    i =0
    for place in response['places']:
        i+=1
        if i > 20:
            break
        query = place['displayName']['text']

        # API endpoint
        url = f'https://www.googleapis.com/customsearch/v1?q=\"{query}\"&exactTerms=\"{query}\"&key={api_key}&cx={search_engine_id}'

        # Make the request
        search_response = requests.get(url).json()
        if 'searchInformation' not in search_response:
            break
        if len(search_response['searchInformation']['totalResults']) <= threshold:
            result.append(place)

    return result
    # return 0

def photo_processing(places, api_key):
    for place in places:
        name = place['photos'][0]['name']
        secondName = place['photos'][1]['name']
        url = f'https://places.googleapis.com/v1/{name}/media?key={api_key}&maxHeightPx=4800&maxWidthPx=4800&skipHttpRedirect=true'
        photoUrl = requests.get(url).json()['photoUri']
        place['photos'] = photoUrl
        place["displayName"] = place["displayName"]['text']
        if "editorialSummary" in place:
            place["editorialSummary"] = place["editorialSummary"]['text']
    return places
    # return 0


PLACES_API_KEY = 'AIzaSyADCC6No81py9j21Bn4jpTvkzfbX-3Nl4U'
SEARCH_API_KEY = 'AIzaSyAo6mmyusNoSHvGY5NPpc1hBu0vZ3LLRIc'
SEARCH_ENGINE_ID = '2745237fd34ea4519'
query = "italian lunch"
latitude = 41.874734138641095
longitude =  -87.65149309002025
threshold = 40000
x = find_places(query, PLACES_API_KEY, latitude, longitude, 20)
y = place_filter(x, SEARCH_API_KEY, SEARCH_ENGINE_ID, 40000)
z = photo_processing(y, PLACES_API_KEY)
with open('ultimateBalls.txt', 'w') as f:
    json.dump(z, f, indent=4)