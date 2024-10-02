# Dockerfile
FROM nginx:latest

ENV DEBIAN_FRONTEND=noninteractive

# Remove the directory
RUN rm -rf /usr/share/nginx/html

# Copy the repository to the directory
COPY . /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
