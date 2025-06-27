
# SEA Catering – Smart Meal Subscription App 🍱

**SEA Catering** is a full-stack web application designed to simplify healthy meal subscription services for users. It allows users to register, log in, choose meal plans (such as Diet, Protein, or Royal Plans), customize delivery days and meal types, and subscribe with just a few clicks.

This app is ideal for busy individuals who want consistent, nutritious food without the hassle of ordering daily. It also includes role-based dashboards for both regular users and administrators.

---

## 🔍 About the Project

This project was built as a learning and practical exercise in developing a full-stack system using JavaScript technologies. The goal is to simulate a real-world use case — a food subscription platform — that includes:

- Secure authentication system using JSON Web Tokens (JWT)
- Frontend-backend communication using HTTP requests
- Protected API routes
- Dynamic UI components for a modern user experience

---

## ⚙️ Technologies Used

- **Frontend:**
  - React.js (with JSX)
  - Tailwind CSS (for styling)
  - Axios & Fetch API (for HTTP requests)
  - SweetAlert2 (for modal confirmations and alerts)

- **Backend:**
  - Node.js with Express.js
  - MySQL (Relational Database)
  - JWT (Authentication)
  - dotenv (Environment variable management)

- **Programming Languages:** JavaScript (React JSX on frontend, Node.js on backend)

- **IDE:** Visual Studio Code (VSCode)  
  Recommended Extensions:
  - Prettier – Code Formatter  
  - Tailwind CSS IntelliSense  
  - ESLint  
  - React Snippets

---

## 🔐 Key Features

- User registration and login
- Smooth UI with transform animations between login and sign-up panels
- Form validation with SweetAlert2 warnings
- Dynamic price calculation based on plan, meals, and days
- JWT-protected subscription form
- Role-based dashboard for users and admins
- Error handling and success alerts

---

## 🧾 How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/sea-catering.git
cd sea-catering
```

---

### 2. Setup Backend (Node.js)

```bash
cd sea-catering-backend
npm install
```

Create a `.env` file in `sea-catering-backend/`:

```
PORT=3001
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=sea_catering
```

Then run the backend:

```bash
node server.js
```

---

### 3. Setup Frontend (React)

```bash
cd sea-catering-frontend
npm install
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173)

---

## 🔒 Security & Authentication

- JWT tokens are issued after login and stored in `localStorage`
- All protected API routes use `Authorization: Bearer <token>` headers
- The backend checks token validity via middleware before accessing protected resources

---

## 📚 Developer Information

- **Name:** Muhammad Dzakwan Najmi  
- **University:** Universitas Islam Kalimantan Selatan  
- **Faculty:** Faculty of Information Technology  
- **Program:** Informatics Engineering  
- **Role:** Full-Stack Developer  
- **IDE:** Visual Studio Code  
- **Main Language:** JavaScript (Node.js + React)

---

## ✅ Final Notes

This app demonstrates the integration of frontend and backend using modern JavaScript frameworks. It includes authentication, protected routes, animated transitions, and form validation. Suitable for both desktop and mobile, the SEA Catering system is a functional prototype of a food delivery platform.
