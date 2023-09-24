# Use an official Node.js runtime as the base image (Node.js version 18.15.0)
FROM node:18.15.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your app is listening on
EXPOSE 5000

# Start your Node.js application
CMD ["npm", "run", "dev"]
