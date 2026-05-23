#  AeroBank Frontend UI | DevOps Vanguard (Pod 5)

This repository contains the React-based frontend application for **AeroBank**, built with modern HTML, CSS, and JavaScript. 

** Backend Dependency:** This application dynamically consumes the AeroBank REST API. Ensure the backend microservice is fully active, healthy, and routable before launching or testing this frontend interface.

** Containerization:** This application is fully containerized for Kubernetes deployment and is configured to expose port `3000` via NGINX.

---

##  Project Architecture

![AeroBank Frontend Architecture](frontend-architecture.svg)

---

##  Docker Configuration

This application utilizes a multi-stage Docker build to optimize performance, minimize image size, and ensure a secure, production-ready artifact for our ECR registry. 

Below is the `Dockerfile` used to build and serve the application:

```dockerfile
# Stage 1: Build the React application 
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built application with a lightweight web server
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

Team & Contributors
This section tracks the engineers who have actively contributed code to the frontend deployment.
 
Oluwasheyi Olayemi Ojelade - Principal Cloud Architect & Tech Lead

Akachukwu Osunkwo - Project Contributor

Shaka-Jimoh Musharraf - Contributor

Ruth Ezinne Orji - Contributor

Ndidi Edith - Contributor
