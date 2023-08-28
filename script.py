import requests

API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
headers = {"Authorization": "Bearer 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"}


def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    print(response.json())
    return response.json()


output = query("dog.jpeg")
