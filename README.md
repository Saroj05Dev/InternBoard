# 🚀 InternBoard

InternBoard is a full-stack MERN application for managing interns during a fundraising campaign. Built with React, Node.js, Express, and MongoDB, it allows admins to add, edit, view, and track donations raised by interns, along with a leaderboard and authentication system.

---

## 📸 Demo
# Dashboard
<img width="1894" height="868" alt="Screenshot 2025-08-02 110313" src="https://github.com/user-attachments/assets/a1101f8d-14a2-426d-902b-a767e794dcd9" />
# Leaderboard
<img width="1912" height="811" alt="Screenshot 2025-08-02 110337" src="https://github.com/user-attachments/assets/c6a0aece-2494-447c-9fdf-b6c7c694292e" />
# Login Page
<img width="1915" height="870" alt="Screenshot 2025-08-02 110358" src="https://github.com/user-attachments/assets/0392da36-0ed2-4307-bc32-9e8aa1cc9c2d" />
# SignUp Page
<img width="1916" height="870" alt="Screenshot 2025-08-02 110409" src="https://github.com/user-attachments/assets/6ed7af1d-0583-4309-8489-1feba82b3fd4" />

---

## ✨ Features

- ✅ Responsive Dashboard to view intern cards
- ✅ Add/Edit Intern details with donation tracking
- ✅ Search functionality for quick filtering
- ✅ Auto-generated Referral Codes
- ✅ Static Rewards section per intern
- ✅ Dummy Login/Signup system (no real auth)
- ✅ Route protection — only logged-in users can access the dashboard
- ✅ Responsive Navigation Bar with hamburger menu
- ✅ Static Leaderboard Page (Bonus)
- ✅ Clean modern UI with Tailwind CSS

---

## 🛠 Tech Stack

| Frontend       | Backend         | Styling       | Utilities        |
|----------------|------------------|----------------|------------------|
| React.js       | Node.js          | Tailwind CSS   | React Router     |
| React Icons    | Express.js       | Lucide React   | Axios            |
| React Hot Toast| MongoDB (Mongoose)|               |                  |

---

## 📁 Folder Structure
intern-portal/
├── client/ # Frontend (React + Vite)
│ ├── components/ # Navbar, Footer, Forms
│ ├── pages/ # Login, Signup, Dashboard, Leaderboard, About
│ └── hooks/ # useAuth (auth context)
│
├── server/ # Backend (Express)
│ ├── models/ # Intern schema
│ ├── routes/ # API routes
│ └── index.js # Entry point


---

## 🔐 Authentication

This project includes **dummy auth** using localStorage:
- Login/Signup simulates a user
- Protected routes using custom hooks
- Dashboard access only for logged-in users

---

## 📊 Leaderboard (Bonus)

> ✅ Implemented as an optional static leaderboard using dummy data.

---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Saroj05Dev/InternBoard.git
cd InternBoard

2. Install dependencies
Client
cd client
npm install

Server
cd ../server
npm install

# In one terminal
cd server
npm start

# In another terminal
cd client
npm run dev

🧪 Dummy Credentials
You can use any dummy email and name to login or signup.

🧑‍💻 Author
Developed by Saroj Kumar Das
