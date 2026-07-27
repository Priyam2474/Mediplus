## Mediplus

## 🌟 Overview

Mediplus brings together multiple healthcare services into one digital platform. It is designed to provide a smooth and efficient experience for patients while also supporting doctors and administrative staff in managing appointments, lab services, and medical orders.

## ✨ Key Features

- User registration and login
- Doctor appointment booking
- Medicine ordering and cart management
- Laboratory service booking
- Secure payment integration
- User profile management
- Forgot password and reset password flow
- Contact and support module

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- CSS / Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Nodemailer
- Razorpay

## 📁 Project Structure

- Client/mediplus - Patient-facing frontend
- Client/doctor - Doctor-side frontend
- Client/Server - Backend API and database integration

## ⚙️ Prerequisites

Before running the project, make sure you have:

- Node.js installed
- npm installed
- MongoDB running locally

## 🚀 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Sample mediplus
```

2. Install backend dependencies
```bash
cd Client/Server
npm install
```

3. Install patient frontend dependencies
```bash
cd ../mediplus
npm install
```

4. Install doctor frontend dependencies
```bash
cd ../doctor
npm install
```

## 🔧 Environment Configuration

Create a `.env` file inside the backend folder and add:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mediplus
JWT_SECRET=your_jwt_secret
```

## ▶️ Running the Application

### Start the backend
```bash
cd Client/Server
npx nodemon server.js
```

### Start the patient frontend
```bash
cd Client/mediplus
npm start
```

### Start the doctor frontend
```bash
cd Client/doctor
npm start
```

The backend will run at:

```text
http://localhost:5000
```

The frontend applications will run at:

```text
http://localhost:3000
```

