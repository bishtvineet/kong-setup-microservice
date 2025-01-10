# Build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY node1/package*.json ./
COPY node1/app.js ./
RUN npm install
COPY . .

# Runtime stage
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app .
CMD ["npm", "start"]
