# Stage 1: Build
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files first to optimize caching
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire source code
COPY . .

# Declare build-time environment variables
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_WEBSITE_ID
ARG NEXT_PUBLIC_NODE_ENV
ARG NEXT_PUBLIC_SAS_API_URL
ARG NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
ARG NEXT_PUBLIC_IS_USER_AUTH
ARG NEXT_PUBLIC_SECRET_KEY

ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_WEBSITE_ID=${NEXT_PUBLIC_WEBSITE_ID}
ENV NEXT_PUBLIC_NODE_ENV=${NEXT_PUBLIC_NODE_ENV}
ENV NEXT_PUBLIC_SAS_API_URL=${NEXT_PUBLIC_SAS_API_URL}
ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
ENV NEXT_PUBLIC_IS_USER_AUTH=${NEXT_PUBLIC_IS_USER_AUTH}
ENV NEXT_PUBLIC_SECRET_KEY=${NEXT_PUBLIC_SECRET_KEY}

# Build the Next.js app
RUN yarn build 

# Stage 2: Runner
FROM node:20-slim AS runner

WORKDIR /app

# Copy the entire build from the builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./

# Install production dependencies
RUN yarn install --frozen-lockfile --production && yarn add sharp

# Runtime environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port
EXPOSE 3000

# Run the Next.js server (instead of exporting static files)
CMD ["yarn", "start"]
