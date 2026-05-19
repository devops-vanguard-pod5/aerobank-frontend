# Digital Witch Cloud Security / DevOps Project: Bank Management App (Frontend)

This is the frontend application built with Create React App, comprising CSS, HTML, and JS. 

**⚠️ Note:** This application highly depends on the backend to run. Ensure the backend is active and healthy before launching the frontend.

**🐳 Containerization:** This app is fully containerized and configured to expose port `3000`.

---

### Project Architecture
![App Preview](architecture-HIPPAA.drawio.svg)

---

### Docker Configuration
The application is deployed using a multi-stage Docker build to optimize performance. Below is the `Dockerfile` used to bring the app up:

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
Team & Contributors
Oluwasheyi Ojelade - Tech Lead (Pod 5 DevOps Vanguard)
Engineer Dennis - Project Supervisor
Shaka-Jimoh Musharraf - Contributor