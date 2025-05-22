# Base image
FROM node:20-alpine

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy only dependency manifests first (for better layer caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies (force lockfile regeneration if incompatible)
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build your app (if using TypeScript)
RUN pnpm build

# Expose app port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
