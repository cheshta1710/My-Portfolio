# CI/CD Pipeline with Flask

## Project Overview
This project demonstrates a complete CI/CD (Continuous Integration/Continuous Deployment) pipeline using Docker, Jenkins, Python, and Flask.

## Technologies Used
- **Docker**: Containerization for consistent deployment
- **Jenkins**: Automation server for CI/CD pipeline
- **Python**: Programming language
- **Flask**: Web framework for the application
- **Linux**: Operating system environment

## Project Structure
```
cicd/
├── app.py          # Flask application with API endpoints
├── Dockerfile      # Docker configuration for containerization
└── README.md       # Project documentation
```

## Features
- **Flask Web Application**: Simple API with multiple endpoints
- **Docker Containerization**: Consistent deployment across environments
- **Jenkins Pipeline**: Automated testing and deployment
- **Linux Environment**: Production-ready deployment

## API Endpoints
- `/info`: Returns information about the CI/CD pipeline
- `/mail`: Second function for CI/CD pipeline demonstration

## How to Run
1. Clone the repository
2. Build the Docker image: `docker build -t cicd-app .`
3. Run the container: `docker run -p 5000:5000 cicd-app`
4. Access the application at `http://localhost:5000`

## CI/CD Pipeline Benefits
- Automated testing and deployment
- Consistent environment across development and production
- Reduced deployment time and errors
- Scalable and maintainable infrastructure

## GitHub Repository
[View the full project on GitHub](https://github.com/cheshta1710/cicd.git) 