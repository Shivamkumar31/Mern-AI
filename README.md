# 🚀 MERN AI Workflow Builder

A full-stack AI-powered web application that allows users to generate responses using AI in a **visual workflow interface** built with React Flow.

---

## 🧠 Project Overview

This project demonstrates how to integrate **AI (OpenRouter)** with a **MERN stack application** and visualize the process using a **node-based workflow UI**.

Users can:

* Enter a prompt in a visual node
* Execute the flow to get AI-generated output
* Save the prompt and response to a database

---

## 🎯 Features

* 🔗 Visual workflow using React Flow (Input → AI → Output)
* 🤖 AI integration using OpenRouter API
* 💾 Save prompt & response to MongoDB
* ⚡ Real-time API interaction
* 🎨 Clean and interactive UI

---

## 🧱 Tech Stack

### Frontend:

* React (Vite)
* React Flow
* Axios

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (Atlas)

### AI:

* OpenRouter API (LLM)

---

## 🔁 Application Workflow

1. User enters a prompt in the Input Node
2. Clicks **Run Flow**
3. Frontend sends request to backend API
4. Backend calls OpenRouter AI API
5. AI response is returned to frontend
6. Result Node displays output
7. User can click **Save** to store data in MongoDB

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/mern-ai-workflow.git
cd mern-ai-workflow
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
API_KEY=your_openrouter_api_key
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Install required packages:

```bash
npm install reactflow axios
```

Run frontend:

```bash
npm run dev
```

---

## 🌍 API Endpoints

### 🔹 Generate AI Response

```
POST /api/ask-ai
```

Request:

```json
{
  "prompt": "What is AI?"
}
```

---

### 🔹 Save Data

```
POST /api/save
```

Request:

```json
{
  "prompt": "What is AI?",
  "response": "AI is artificial intelligence..."
}
```

---

## 🗄️ Database Schema

```js
{
  prompt: String,
  response: String,
  createdAt: Date
}
```

---

## 🎨 UI Explanation

* **Input Node** → User enters prompt
* **Result Node** → Displays AI response
* **Edge (Line)** → Represents flow of data
* **Run Flow Button** → Executes AI request
* **Save Button** → Stores data in MongoDB

---

## 🚀 Deployment

### Frontend:

* Vercel

### Backend:

* Render

---

## 🎥 Demo

(Add your Loom or YouTube video link here)

---

## 📌 What I Learned

* Integrating AI APIs into full-stack apps
* Building visual workflows using React Flow
* Handling async API calls
* Managing backend & database integration

---

## 👨‍💻 Author

Shivam Kumar

---

## ⭐ Future Improvements

* Add multiple AI nodes (pipeline)
* Drag-and-drop node creation
* User authentication
* Save full workflows
* Better UI/UX

---
