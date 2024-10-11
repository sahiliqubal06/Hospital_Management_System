
---

# 🏥 **Hospital Management System**

A **MERN stack** web application designed to streamline hospital operations. Manage **patient appointments**, **doctor schedules**, and **departmental activities** with ease. This system includes an **admin dashboard** and a **user-friendly interface** for seamless management.

<!-- ![HospiCare Logo](#) *(Insert logo/image if available)* -->

---

## 🚀 **Features**

### 🔑 **Authentication & Authorization**
- Secure **JWT-based** authentication.
- Password encryption using **bcrypt**.

### 🧑‍⚕️ **Doctor & Patient Management**
- Add, edit, and view doctor profiles.
- Manage patient appointments and records.

### 🏥 **Appointment Scheduling**
- Schedule appointments with specific doctors and departments.
- Real-time availability of doctors.

### ☁️ **Image Upload**
- Image upload with **Cloudinary** integration for efficient storage.

### 🔒 **Security**
- Data validation and error handling.
- Secure storage of sensitive information.

---

## 🛠️ **Tech Stack**

### **Frontend**:
- **React.js** with **Vite** for fast builds.
- **React Router** for smooth navigation.
- **React Toastify** for notifications.
- **React Icons** and **React Multi Carousel** for enhanced UI.

### **Backend**:
- **Node.js** with **Express** for building APIs.
- **MongoDB** & **Mongoose** for data storage.
- **JWT** for secure user sessions.

### **Other Tools**:
- **ESLint** for code quality.
- **Cloudinary** for file storage.
- **Validator** for form validation.

---

## 📂 **Project Structure**

```plaintext
Hospital_Management_System/
│
├── backend/
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── config/           # Environment variables and config
│
├── frontend/
│   ├── src/
│   │   ├── components/   # React components (Forms, Cards, etc.)
│   │   ├── pages/        # Page views (Appointments, Doctors)
│   │   └── assets/       # Static assets (CSS, images)
│
├── dashboard/
│   ├── src/
│   │   ├── components/   # Admin dashboard components
│   │   └── pages/        # Admin pages (Appointments, Doctors)
│
└── README.md
```

---

## ⚙️ **Installation**

### Prerequisites:
- **Node.js** and **npm** installed.
- **MongoDB** setup locally or on a cloud service.
- **Cloudinary** account for image management.

### Steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sahiliqubal06/Hospital_Management_System.git
   cd Hospital_Management_System
   ```

2. **Install Dependencies**:

   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install

   # Dashboard
   cd ../dashboard
   npm install
   ```

3. **Set Environment Variables**:
   
   Create a `.env` file in the `backend/config` folder with the following:

   ```bash
   MONGO_URI=your-mongo-uri
   JWT_SECRET=your-jwt-secret
   CLOUDINARY_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   PORT=your-server-port
   ```

---

## 🚀 **Running the Application**

1. **Backend**:

   ```bash
   cd backend
   npm run dev
   ```

2. **Frontend**:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Dashboard**:

   ```bash
   cd ../dashboard
   npm run dev
   ```

---

## ✨ **Key Features & Components**

### **User Features**:
- **Appointment Scheduling**: Patients can book appointments with doctors and receive notifications.
- **Department Selection**: Easily choose the right department for your healthcare needs.
  
### **Admin Features**:
- **Doctor Management**: Add, remove, and manage doctor profiles.
- **Appointment Management**: View and modify patient appointments.
- **Secure Access**: Only authorized admins can access the dashboard.

### **UI & UX**:
- **Responsive Design**: Accessible across mobile and desktop devices.
- **Interactive Elements**: Smooth transitions and real-time updates.

---

## 🛡️ **Security & Validation**

- **Authentication**: JSON Web Tokens (JWT) ensure secure user sessions.
- **Password Encryption**: Bcrypt secures user passwords.
- **Data Validation**: User inputs validated using the `validator` library.

---

## 📜 **License**

This project is licensed under the ISC License. See the LICENSE file for more details.

---

### 📧 **Contact Information**

For any queries or collaboration opportunities, please reach out to [Sahil Iqubal](mailto:sahiliqubal06@gmail.com).

---
