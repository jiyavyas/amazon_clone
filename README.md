# 🛒 Amazon Clone (MERN Stack)

This is a full-stack Amazon clone web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It mimics core functionalities of Amazon such as product listing, authentication, add to cart, and buy now experience.

## 🚀 Features

- User Registration & Login (with authentication)
- Product List Page with search & category filters
- Detailed Product View Page
- Add to Cart
- Buy Now Functionality
- Responsive UI (mobile + desktop)
- Integrated Toast Notifications
- Protected Routes
- State Management (Context API / Redux)

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router DOM
- Axios
- Bootstrap
- Context API / Redux

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for Authentication
- bcrypt for password hashing
- dotenv for env management

---

## 📁 Folder Structure

```
eccomerce/
├── client/          # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── server/          # Node.js + Express Backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── app.js
├── .gitignore
└── README.md
```

---

## 🔧 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/jiyavyas/amazon_clone.git
cd amazon_clone
```

### 2. Setup Backend

```bash
cd server
npm install
# Add your MongoDB URI to a .env file:
# MONGO_URI=your_mongo_connection_string
node app.js
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

---


## 🙋‍♀️ About Me

👋 I'm **Jiya Vyas**, a final year student at MLV Textile Engineering College and passionate MERN Stack Developer.

📫 Connect with me:
- [LinkedIn](http://linkedin.com/in/jiya-vyas-15492526a)
- [GitHub](https://github.com/jiyavyas)

---

