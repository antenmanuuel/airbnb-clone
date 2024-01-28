# Use the official Node.js 20 image based on Alpine Linux 3.18
FROM node:20-alpine3.18

# Set the working directory in the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# Install the dependencies from the package.json file.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Generate the Prisma client. This step uses the prisma schema file in your project to generate the client.
RUN npx prisma generate

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application in development mode.
CMD npm run dev
