
# 🏡 MateMatch

**Tagline:** Find your ideal roommate effortlessly by matching lifestyles, preferences, and budgets.

---

## 🛠️ Tech Stack

**Frontend (Client / Presentation Layer):**
- React + Vite  
- TailwindCSS + DaisyUI (UI Library)  
- Axios (API calls)  
- Optional: Socket.io-client for real-time chat  

**Backend (Server / Application Layer):**
- Node.js + Express.js  
- MongoDB (Database)  
- JWT for authentication  
- Optional: Socket.io for real-time chat  

**Microservices:**  
> Single backend service (no need to split, project scope is manageable)  
> Frontend is the client application, not a microservice  

---

## 🔧 Work of Microservices / Layers

### **Frontend**
- Displays profiles and swipe interface  
- Handles chat UI  
- Calls backend APIs for authentication, matching, messaging  

### **Backend**
- Authentication & user management  
- Matching logic & swipe system  
- Messaging & chat handling  


### **Database Layer**
- Collections: Users, ConnectionRequests, Chats  

---

## 🏗️ High-Level Design (HLD)

```mermaid
graph TD
    A[Frontend - React] -->|REST API| B[Backend - Node.js + Express]
    B --> C[MongoDB Database]
    B --> D[Optional: Socket.io - Real-time Chat]
````

**HLD Summary:**

* Frontend communicates with backend via REST APIs
* Backend interacts with MongoDB for all data operations
* Optional Socket.io for real-time messaging
* Single backend service, frontend as client application

---

## 📐 Low-Level Design (LLD)

### **1️⃣ User Collection**

* `_id`
* `firstName`
* `lastName`
* `emailId`
* `password`
* `age`
* `gender` ("male", "female", "other")
* `budget` (monthly rent budget)
* `location` (city/area)
* `lifestyle` (object)

  * `sleepSchedule`
  * `cleanliness`
  * `hobbies` ([String])
  * `smoking` (Boolean)
  * `pets` (Boolean)
* `photoUrl`
* `about`
* `createdAt` / `updatedAt`

### **2️⃣ ConnectionRequest Collection**

* `_id`
* `fromUserId` (ref → User)
* `toUserId` (ref → User)
* `status` ("ignored", "interested", "accepted", "rejected")
* `createdAt` / `updatedAt`

### **3️⃣ Chat Collection**

* `_id`
* `participants` ([ref → User])
* `messages` ([

  * `senderId` (ref → User)
  * `text`
  * `createdAt`
    ])
* `createdAt` / `updatedAt`

---

### **🔗 API Endpoints**

#### **AuthRouter**

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | /signup  | Register new user |
| POST   | /login   | Login user        |
| POST   | /logout  | Logout user       |

#### **ProfileRouter**

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | /profile/view     | Get user profile        |
| PATCH  | /profile/edit     | Edit profile            |
| PATCH  | /profile/password | Update / Reset password |

#### **ConnectionRequestRouter**

| Method | Endpoint                           | Description           |
| ------ | ---------------------------------- | --------------------- |
| POST   | /request/send/:status/:userId      | Send roommate request |
| POST   | /request/review/:status/:requestId | Accept/Reject request |

#### **UserRouter**

| Method | Endpoint                | Description                               |
| ------ | ----------------------- | ----------------------------------------- |
| GET    | /user/requests/received | Get requests received by logged-in user   |
| GET    | /user/connections       | Get accepted matches (roommates)          |
| GET    | /user/feed              | Get profiles of other users (to swipe on) |

**Matching Logic:**

* `/user/feed` excludes yourself and users you already interacted with
* Optional filters: location, budget, lifestyle compatibility
* Swipe "interested" → creates `ConnectionRequest`
* Mutual interest → status = "accepted" → chat enabled

---

## 🖼️ Component Diagram (Frontend)

```mermaid
graph TD
    A[App] --> B[Login / Signup Page]
    A --> C[Profile Page]
    A --> D[Feed / Swipe Interface]
    A --> E[Chat / Messages]
    A --> F[Connection Requests]
```

---

## 🌟 Optional Advanced Features

* Real-time chat with Socket.io
* Location-based filtering (Google Maps API)
* Match percentage based on lifestyle & budget
* Profile photo uploads (Cloudinary)
* Gamification or badges for active users

---

**🎯 Summary:**
MateMatch is a **swipe-based roommate matching platform** inspired by DevTinder.

* Solves a **real-world problem**: finding compatible roommates efficiently
* Reuses DevTinder backend skills (Node.js, Express, MongoDB)
* Frontend is **interactive and user-friendly** (React + TailwindCSS)
* Can be deployed as a full-stack project with real-time chat support

---

```

This `.md` file:  
- Highlights **project name, tech stack, layers, HLD, LLD**  
- Has **Mermaid diagrams** for architecture and frontend components  
- Includes **emoji/stickers** to make it lively  
- Can be added to your **portfolio or GitHub repo**  

---

Perfect! Since you want **MateMatch** to follow a similar **folder structure as DevTinder**, here’s a clean, organized version for your `.md` documentation:

---

```

## 📂 Folder Structure – MateMatch

```
MateMatch/
│
├── src/
│   │   ApiList.md           # List of all API endpoints
│   │   app.js               # Main server entry point
│   │   notes.md             # Any project notes / TODOs
│
│   ├── config/
│   │       database.js      # MongoDB connection configuration
│
│   ├── middlewares/
│   │       auth.js          # JWT authentication middleware
│
│   ├── models/
│   │       chat.js
│   │       connectionRequest.js
│   │       user.js
│
│   ├── routes/
│   │       authRouter.js
│   │       chat.js
│   │       profileRouter.js
│   │       requestRouter.js
│   │       userRouter.js
│
│   └── utils/
│           cronjob.js       # Any scheduled jobs (optional)
│           socket.js        # Socket.io logic for real-time chat
│           validation.js    # Helper functions for validation
│
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package-lock.json        # Node modules lock file
├── package.json             # Project dependencies & scripts
└── README.md                # Project documentation
```

---

### ✅ Notes on Structure

* **`src/config`** → Keep DB setup or other configs separate for scalability.
* **`src/middlewares`** → For authentication, error handling, or logging.
* **`src/models`** → MongoDB schemas (User, Chat, ConnectionRequest).
* **`src/routes`** → API endpoints grouped logically.
* **`src/utils`** → Helper functions, socket logic, or cron jobs.
* **`.env`** → Keep secrets like JWT secret and DB URI.

---

