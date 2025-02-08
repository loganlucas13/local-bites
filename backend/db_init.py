from getpass import getpass
from mysql.connector import connect, Error
import googlemaps
import time


def insert_restaurant(connection, place):
    cursor = connection.cursor()
    name = place.get("name", "Unknown")
    address = place.get("vicinity") or place.get("formatted_address", "")
    lat = place["geometry"]["location"]["lat"]
    lng = place["geometry"]["location"]["lng"]
    rating = place.get("rating", 0)
    price = place.get("price_level", 0)

    # Example placeholders for fields we don't get from Places
    cuisine = "unknown"
    description = "Google Places import"
    vibe = "unknown"
    breakfast = 0
    lunch = 1
    dinner = 1
    dessert = 0
    vegetarian = 0

    query = """
    INSERT INTO restaurants 
        (latitude, longitude, name, address, rating, price, 
         cuisine, description, vibe, 
         breakfast, lunch, dinner, dessert, vegetarian)
    VALUES 
        (%s, %s, %s, %s, %s, %s, 
         %s, %s, %s, 
         %s, %s, %s, %s, %s)
    """
    cursor.execute(query, (
        lat, lng, 
        name, address, 
        rating, price, 
        cuisine, description, vibe, 
        breakfast, lunch, dinner, dessert, vegetarian
    ))
    connection.commit()



