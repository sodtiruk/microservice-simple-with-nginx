# Use official Python image as a parent image
FROM python:3.10-slim

# Set environment variables to avoid Python writing pyc files and buffering stdout/stderr
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install the dependencies from the requirements file
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Expose the port the app will run on
EXPOSE 5000

# Command to run the FastAPI application with Uvicorn server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]