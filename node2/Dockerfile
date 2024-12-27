# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
COPY app.js ./

# Install dependencies
RUN npm install

# Expose the service port
EXPOSE 3001

# Start the service
CMD ["npm", "start"]
