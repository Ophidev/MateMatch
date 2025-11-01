
# 🏠 MateMatch

<p align="center">
  <img src="Frontend/src/images/logo.png" style="border-radius:20px" width="120"/>
</p>

> **Find your perfect roommate easily!**  
> MateMatch is a **MERN Stack** web application that helps students and professionals discover compatible roommates and shared accommodations 🧳👯‍♂️.

---

## 🖼️ Live Demo Preview

<p align="center">
  <img src="Frontend/src/images/HomeLayout.png" alt="MateMatch Home Preview" width="800" style="border-radius:15px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);"/>
</p>

<p align="center">
  <i>Beautiful, friendly, and modern roommate matching interface ✨</i>
</p>

---

## 🚀 Tech Stack

### 🖥️ Frontend
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=react-router&logoColor=white)

### ⚙️ Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

---

## 🧩 Project Overview

MateMatch is a **full-stack roommate matching platform** that connects users looking for shared living spaces.  
It’s designed for **college students** and **working professionals** who’ve moved away from home and want to find a compatible roommate 🏡.

### ✨ Features
- 👤 Create a profile with your details, preferences, and location.
- 🏘️ Browse and connect with potential roommates near your area.
- 💬 Chat in real-time using live Socket.io messaging.
- 🎨 Enjoy a clean, responsive, and user-friendly UI powered by TailwindCSS + DaisyUI.
- 🔐 Secure authentication & authorization system with JWT.

---

## 🧠 Architecture

```mermaid
graph TD
A[User Interface 💻] -->|REST + WebSocket| B[React + Vite Frontend]
B -->|API Calls| C[Express Server ⚙️]
C -->|Database Queries| D[(MongoDB 🧩)]
C --> E[Socket.io 🔌 for Live Chat]
````

---

## ⚡ Folder Structure

```
MateMatch/
│
├── 📁 Backend/           # Node + Express + MongoDB
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
│
├── 📁 Frontend/          # React + Vite + Redux + DaisyUI
│   ├── src/
│   ├── components/
│   ├── utils/
│   ├── images/
│   │   ├── logo.png
│   │   └── preview.png
│   └── ...
│
└── README.md
```

---

## 🧰 Installation & Setup

### 🔹 1. Clone the repository

```bash
git clone https://github.com/Ophidev/MateMatch.git
cd MateMatch
```

### 🔹 2. Setup the Backend

```bash
cd Backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 🔹 3. Setup the Frontend

```bash
cd Frontend
npm install
npm run dev
```

* Frontend → `http://localhost:5173`
* Backend → `http://localhost:5000`

---

## 🌐 Deployment

* **Frontend:** [Render](https://matematch-frontend.onrender.com)
* **Backend:** Hosted on Render or local server
* **Database:** MongoDB Atlas

---

## 🧑‍💻 Author

**👤 Aditya (Ophidev)**
💼 MERN Developer | 🚀 DevOps Learner
🔗 [GitHub](https://github.com/Ophidev)

---

## ⭐ Support

If you like this project, please **⭐ star** the repo and share it to help more people find their perfect roommate 🙌



