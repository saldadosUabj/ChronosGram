
FROM python:3.11

WORKDIR /api_chronosgram

COPY . .

RUN pip install --no-cache-dir --upgrade -r /api_chronosgram/requirements.txt

COPY . /api_chronosgram/app

# 
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]