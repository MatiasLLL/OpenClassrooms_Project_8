# Use an official Ubuntu base image as it includes necessary dependencies
FROM ubuntu:latest

# Install curl to fetch Bun installer
RUN apt-get update && apt-get install -y curl

# Install curl and unzip to fetch Bun installer
RUN apt-get update && apt-get install -y curl unzip

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
# Ensure the Bun executable is in the PATH
ENV PATH="/root/.bun/bin:$PATH"

# Set the working directory in the Docker image
WORKDIR /app

# Copy your application files into the Docker image
COPY . .

# Install your application's dependencies
RUN bun install

# Build your application
RUN bun run build

# Set the command to start your application
CMD ["bun", "start"]

# # # "start": "bunx --bun http-server ./dist -p 8080",

