# Intelligent Adaptive Memory Allocation Simulator

## Overview
A full-stack memory management simulator that demonstrates classical and adaptive allocation strategies with real-time execution modeling and fragmentation analytics.

## Features

- First Fit Allocation
- Best Fit Allocation
- Worst Fit Allocation
- Adaptive Auto Selection Algorithm
- Process Execution Time Simulation
- Dynamic Memory Block Splitting
- External Fragmentation Calculation
- Paging Simulation with Internal Fragmentation
- Memory Compaction
- Live Fragmentation Graph (Chart.js)
- MongoDB Report Persistence

## Technologies Used

Frontend:
- HTML
- CSS
- JavaScript
- Chart.js

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

frontend/
- index.html
- style.css
- script.js

backend/
- server.js
- models/Report.js
- routes/simulationRoutes.js

## How to Run

### Backend
cd backend
npm install
node server.js

### Frontend
Open index.html using Live Server

## API Endpoint

POST /api/simulations/save-report

## Future Improvements

- Performance benchmarking dashboard
- Algorithm comparison visualization
- AI-based adaptive strategy
- Deployment on cloud platform

## Author
Piyush Prajapati
