from getpass import getpass
from mysql.connector import connect, Error

#================================================================
#
#
#                  DATABASE CONNECTION AND CREATION
#
#
def creation(connection):
    cursor = connection.cursor()
    cursor.execute("SHOW DATABASES LIKE 'establishments'")
    result = cursor.fetchone()
    if result:
        print("Database exists") # placeholder
    else:
        cursor.execute("CREATE DATABASE establishments")
        print("created database")
    connection.database = "establishments"
    print("connected")
#================================================================
#
#
#                        MAIN FUNCTION
#
#
def main():
    try:
        with connect(
            host="localhost",
            user=input("Enter username: "),
            password=getpass("Enter password: "),
        ) as connection:
            creation(connection)
            cursor = connection.cursor()
            cursor.execute("USE establishments")
            restaurantQuery = """
            CREATE TABLE restaurants(
                id INT AUTO_INCREMENT PRIMARY KEY,
                latitude FLOAT,
                longitude FLOAT,
                name VARCHAR(255),
                address VARCHAR(255),
                rating INT,
                price INT,
                cuisine VARCHAR(255),
                description VARCHAR(255),
                vibe VARCHAR(255),
                breakfast TINYINT,
                lunch TINYINT,
                dinner TINYINT,
                dessert TINYINT,
                vegetarian TINYINT
            )
            """
            parkQuery = """
            CREATE TABLE parks(
                id INT AUTO_INCREMENT PRIMARY KEY,
                latitude FLOAT,
                longitude FLOAT,
                name VARCHAR(255),
                address VARCHAR(255),
                rating INT,
                description VARCHAR(255),
                vibe VARCHAR(255)
            )
            """
            museumQuery = """
            CREATE TABLE museums(
                id INT AUTO_INCREMENT PRIMARY KEY,
                latitude FLOAT,
                longitude FLOAT,
                name VARCHAR(255),
                address VARCHAR(255),
                rating INT,
                price INT,
                description VARCHAR(255),
                vibe VARCHAR(255)
            )
            """
            karaokeQuery = """
            CREATE TABLE karaoke(
                id INT AUTO_INCREMENT PRIMARY KEY,
                latitude FLOAT,
                longitude FLOAT,
                name VARCHAR(255),
                address VARCHAR(255),
                rating INT,
                price INT,
                description VARCHAR(255),
                vibe VARCHAR(255)
            )
            """
            thriftingQuery = """
            CREATE TABLE thrifting(
                id INT AUTO_INCREMENT PRIMARY KEY,
                latitude FLOAT,
                longitude FLOAT,
                name VARCHAR(255),
                address VARCHAR(255),
                rating INT,
                price INT,
                description VARCHAR(255),
                products VARCHAR(255),
                vibe VARCHAR(255)
            )
            """
            cursor.execute(restaurantQuery)
            cursor.execute(parkQuery)
            cursor.execute(museumQuery)
            cursor.execute(karaokeQuery)
            cursor.execute(thriftingQuery)
            connection.commit()
            cursor.execute("SHOW TABLES") #to see the tables, checking
    except Error as e:
        print(e)

if __name__ == '__main__':
    main()