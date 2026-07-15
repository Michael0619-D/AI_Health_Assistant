## Multi-stage build for Health Genie (React + Vite + TS)
## Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (leverages Docker layer caching)
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source
COPY . .

# Build production assets
RUN npm run build

## Runtime stage (static file server)
FROM nginx:alpine AS runtime
LABEL maintainer="you" description="Health Genie AI Assistant"

# Copy built assets to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check (optional)
HEALTHCHECK CMD wget -q -O - http://localhost/ || exit 1

# Nginx default command
CMD ["nginx", "-g", "daemon off;"]
