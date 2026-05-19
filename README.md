#  AeroBank Frontend UI | DevOps Vanguard (Pod 5)

This repository contains the React-based frontend application for **AeroBank**, built with modern HTML, CSS, and JavaScript. 

**⚠️ Backend Dependency:** This application dynamically consumes the AeroBank REST API. Ensure the backend microservice is fully active, healthy, and routable before launching or testing this frontend interface.

** Containerization:** This application is fully containerized for Kubernetes deployment and is configured to expose port `3000` via NGINX.

---

##  Project Architecture

![Project Architecture](architecture.png)
*(Note: Ensure your updated architecture diagram is saved as `architecture.png` in the root of this repository).*

---

##  Docker Configuration

This application utilizes a multi-stage Docker build to optimize performance, minimize image size, and ensure a secure, production-ready artifact for our ECR registry. 

Below is the `Dockerfile` used to build and serve the application:

```dockerfile
# Stage 1: Build the React application 
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built application with a lightweight web server
FROM nginx:stable-alpine

# Copy the build output to the nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration, if any (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default nginx port
EXPOSE 3000

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]


           *Team & Contributors*
  
This section tracks the engineers who have actively contributed code to the frontend deployment.  

(Pod 5 Members: Please follow the standard Git workflow SOP to branch, add your name below, and submit a Pull Request to main).  

Oluwasheyi Olayemi Ojelade - Principal Cloud Architect & Tech Lead
Akachukwu Osunkwo - Project Contributor
Shaka-Jimoh Musharraf - Contributor
