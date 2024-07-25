import requests
import json

# Define the URL and the headers
url = "http://127.0.0.1:8000/api/find-solution/"
headers = {
    "Content-Type": "application/json"
}
# python manage.py runserver
# Define the payload
payload = {
    "query": "Transactions are failing, and users are unable to complete their purchases, leading to lost sales and revenue.."
}

# Convert the payload to a JSON string
payload_json = json.dumps(payload)

# Send the POST request
response = requests.post(url, headers=headers, data=payload_json)

# Print the response
print("Status Code:", response.status_code)
print("Response Body:", response.json())
