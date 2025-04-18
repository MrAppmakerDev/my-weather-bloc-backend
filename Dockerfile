# Use the slim variant for a smaller and more secure image
FROM node:22-slim

# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install 

# Expose the application port
EXPOSE 8000

# Use a non-root user for security
# USER node

# Start the application
CMD [ "npm", "run", "dev" ]
