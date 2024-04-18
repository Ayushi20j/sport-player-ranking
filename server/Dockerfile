FROM python:3.10-alpine

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire server directory
COPY . .

# Expose the port the app will run on
EXPOSE 8000

# Start the FastAPI server
CMD python3 app.py