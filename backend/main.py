from getpass import getpass
from mysql.connector import connect, Error



def main():
    try:
        with connect(
            host="localhost",
            user=input("Enter username: "),
            password=getpass("Enter password: "),
        ) as connection:
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
    except Error as e:
        print(e)

if __name__ == '__main__':
    main()