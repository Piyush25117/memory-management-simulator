Intelligent Adaptive Memory Allocation Simulator
Overview

The Intelligent Adaptive Memory Allocation Simulator is a full-stack system designed to simulate how modern operating systems manage memory using different allocation strategies.

The simulator demonstrates classical algorithms such as First Fit, Best Fit, and Worst Fit, while also implementing an Adaptive Allocation Strategy that dynamically selects the most efficient algorithm based on memory state and process requirements.

It provides real-time process execution simulation, fragmentation analysis, and memory visualization, helping users understand how memory is allocated, fragmented, and optimized in operating systems.

This project bridges Operating Systems concepts with modern web technologies, making complex memory management behavior easier to visualize and analyze.

Key Features
Memory Allocation Algorithms

First Fit – Allocates the first available block large enough for the process.

Best Fit – Allocates the smallest sufficient block to reduce memory waste.

Worst Fit – Allocates the largest available block to avoid small fragments.

Adaptive Auto Selection Algorithm – Dynamically chooses the best strategy depending on system conditions.

Process Simulation

Real-time process execution time simulation

Automatic memory allocation and deallocation

Dynamic memory block splitting

Fragmentation Analysis

External Fragmentation calculation

Internal Fragmentation visualization (Paging Simulation)

Memory Compaction to reduce fragmentation

Visualization

Live memory state visualization

Fragmentation analytics

Interactive graphs using Chart.js

Data Persistence

Simulation reports are stored using MongoDB

Allows future analysis of allocation strategies and memory behavior.

Technologies Used
Frontend

HTML5

CSS3

JavaScript

Chart.js (Data Visualization)

Backend

Node.js

Express.js

MongoDB

Mongoose

System Architecture
User Interface (Frontend)
        │
        ▼
Memory Allocation Logic
(JavaScript Simulation Engine)
        │
        ▼
Backend API (Node.js + Express)
        │
        ▼
Database Storage (MongoDB)

The frontend handles simulation logic and visualization, while the backend stores simulation reports and performance metrics.

Project Structure
memory-management-simulator
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend
│   ├── server.js
│   ├── models
│   │   └── Report.js
│   └── routes
│       └── simulationRoutes.js
│
└── README.md
How to Run the Project
1 Clone the Repository
git clone https://github.com/Piyush25117/memory-management-simulator.git
2 Start Backend Server
cd backend
npm install
node server.js

Server will start on:

http://localhost:5000
3 Run Frontend

Open:

frontend/index.html

using Live Server in VS Code.

API Endpoint
Save Simulation Report
POST /api/simulations/save-report

Stores the simulation results including:

allocation strategy

fragmentation data

process execution information

Learning Outcomes

This project demonstrates practical understanding of:

Operating System Memory Management

Allocation Algorithms

Internal vs External Fragmentation

Simulation of Process Execution

Full-Stack Web Development

Data Visualization

Backend API Design

Database Integration

Future Improvements

Algorithm performance benchmarking dashboard

Interactive comparison between allocation strategies

AI-based adaptive allocation algorithm

Cloud deployment (AWS / Docker)

Multi-user simulation environment

Author

Piyush Prajapati
