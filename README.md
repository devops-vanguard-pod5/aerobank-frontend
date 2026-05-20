# 💻 AeroBank Frontend UI | DevOps Vanguard (Pod 5)

This repository contains the React-based frontend application for **AeroBank**, built with modern HTML, CSS, and JavaScript. 

**⚠️ Backend Dependency:** This application dynamically consumes the AeroBank REST API. Ensure the backend microservice is fully active, healthy, and routable before launching or testing this frontend interface.

**🐳 Containerization:** This application is fully containerized for Kubernetes deployment and is configured to expose port `3000` via NGINX.

---

## 🏗️ Project Architecture

```mermaid
flowchart TD
    subgraph Internet[Internet]
        User[User Browser]
    end

    subgraph AWSTerraformManaged[AWS Managed Services]
        R53[AWS Route 53 DNS]
    end

    subgraph EKSCluster[AWS EKS Kubernetes Cluster]
        KubeAPI[K8s API Server]

        subgraph NamespaceFrontend[Namespace: aerobank-frontend]
            Ingress[Nginx Ingress Controller]
            ReactPod[AeroBank Frontend Pod Port 3000]
        end

        subgraph Addons[Kubernetes Add-ons]
            CertManager[Cert-Manager SSL]
        end
    end

    User -- "HTTPS Port 443" --> R53
    R53 --> Ingress
    Ingress -- "Port 3000" --> ReactPod
    ReactPod -- "Secure REST API Calls" --> SecureBackend[Backend REST API Service]
    ReactPod -- "Readiness/Liveness Checks" --> KubeAPI
    Ingress -- "Automated SSL Validation" --> CertManager
