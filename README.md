#  Intelligent Adaptive Memory Allocation Simulator

---

##  Overview

The **Intelligent Adaptive Memory Allocation Simulator** is a **full-stack system** designed to simulate how modern operating systems manage memory using different allocation strategies.

The simulator demonstrates classical algorithms such as:

* **First Fit**
* **Best Fit**
* **Worst Fit**

It also introduces an **Adaptive Allocation Strategy** that dynamically selects the most efficient algorithm based on **memory state and process requirements**.

The system provides:

* **Real-time process execution simulation**
* **Fragmentation analysis**
* **Memory visualization**

This project bridges **Operating System concepts with modern web technologies**, making complex memory management behavior easier to **visualize and analyze**.

---

# 🚀 Key Features

## 🧩 Memory Allocation Algorithms

### 1️⃣ First Fit

Allocates the **first available block** that is large enough for the process.

### 2️⃣ Best Fit

Allocates the **smallest sufficient block** to minimize memory wastage.

### 3️⃣ Worst Fit

Allocates the **largest available block** to avoid creating many small fragments.

### 4️⃣ Adaptive Auto Selection Algorithm

Automatically selects the **most suitable allocation strategy** depending on the **current memory state**.

---

# ⚙️ Process Simulation

* ⏱ **Real-time process execution time simulation**
* 🔁 Automatic **memory allocation and deallocation**
* ✂️ Dynamic **memory block splitting**

---

# 📊 Fragmentation Analysis

The simulator visualizes memory fragmentation in real time.

### External Fragmentation

Occurs when free memory is divided into **small scattered blocks**.

### Internal Fragmentation

Occurs when a process **does not fully utilize the allocated block**.

### Memory Compaction

Combines fragmented memory blocks to **reduce external fragmentation**.

---

# 📈 Visualization

The system provides interactive visual feedback including:

* 📊 **Live memory state visualization**
* 📉 **Fragmentation analytics**
* 📈 **Interactive graphs using Chart.js**

---

# 💾 Data Persistence

Simulation results are stored in **MongoDB**, enabling:

* Historical analysis of allocation strategies
* Storage of simulation reports
* Future performance comparisons

---

# 🛠 Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript
* Chart.js (Data Visualization)

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# 🏗 System Architecture

```
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
```

The **frontend handles simulation logic and visualization**, while the backend manages **API services and data storage**.

---

# 📂 Project Structure

```
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
```

---

# ▶️ How to Run the Project

## 1️⃣ Clone the Repository

```
git clone https://github.com/Piyush25117/memory-management-simulator.git
```

---

## 2️⃣ Start Backend Server

```
cd backend
npm install
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 3️⃣ Run Frontend

Open:

```
frontend/index.html
```

using **Live Server in VS Code**.

---

# 🔗 API Endpoint

## Save Simulation Report

```
POST /api/simulations/save-report
```

Stores simulation data including:

* allocation strategy
* fragmentation statistics
* process execution details

---

# 🎯 Learning Outcomes

This project demonstrates understanding of:

* Operating System **Memory Management**
* **Allocation Algorithms**
* **Internal vs External Fragmentation**
* **Process Execution Simulation**
* **Full-Stack Web Development**
* **Backend API Design**
* **Data Visualization**
* **Database Integration**

---

# 🔮 Future Improvements

* 📊 Algorithm **performance benchmarking dashboard**
* 📉 Visual **comparison between allocation strategies**
* 🤖 **AI-based adaptive memory allocation**
* ☁️ **Cloud deployment (AWS / Docker)**
* 👥 Multi-user simulation environment

---

# 👨‍💻 Author

**Piyush Prajapati**

---

⭐ If you like this project, consider **starring the repository**!
