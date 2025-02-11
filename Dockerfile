# Use the official Node.js image for development
FROM node:8.9

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the Angular app runs on
EXPOSE 4202

# Start the Angular development server on port 4202
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4202", "--poll", "2000"]