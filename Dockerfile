# Use the official Node.js image from the Docker Hub
FROM node:alpine
# Label for maintainer information
LABEL maintainer='rasifrazak123@gmail.com'

# Create a non-root user
RUN adduser -D myuser

# Create the application directory
WORKDIR /usr/src/app

# Set ownership of the application directory to the newly created user
RUN chown -R myuser:myuser /usr/src/app

# Switch to the newly created user
USER myuser

# Copy package.json and package-lock.json (if available)
COPY package*.json ./


# Install dependencies
RUN npm ci --verbose

# Copy the rest of the application code
COPY . ./

EXPOSE 7500

# Command to run the application
CMD ["npm", "run", "dev"]




