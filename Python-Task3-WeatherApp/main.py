import json
import requests

city = input("Enter city name: ")
API_KEY = "your_api_key_here"

url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

data = requests.get(url).json()
temp = data["main"]["temp"]
humidity = data["main"]["humidity"]
wind = data["wind"]["speed"]
condition = data["weather"][0]["description"]