# Build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY app.js ./
RUN npm install
COPY . .

# Runtime stage
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app .
CMD ["npm", "start"]
