
LearnBytes is a full-stack e-learning platform that allows instructors to create and manage courses, and students to enroll, learn, and track their progress. The project is built with a React frontend and a Node.js/Express backend, using MongoDB for data storage.

---

## Features

- **User Authentication:** Secure sign-up, login, and JWT-based authentication.
- **Role-Based Access Control:** Separate roles for Student, Instructor, and Admin.
- **Course Management:** Instructors can create, edit, and manage courses with sections and subsections.
- **Category Management:** Courses are organized by categories.
- **OTP Email Verification:** Users verify their email via OTP sent to their inbox.
- **Profile Management:** Users can update their profile and settings.
- **Course Enrollment:** Students can enroll in courses and track their progress.
- **Ratings & Reviews:** Students can rate and review courses.
- **Responsive UI:** Built with Tailwind CSS for a modern, responsive design.
- **Error Handling:** User-friendly error messages and notifications.

---

## Tech Stack

- **Frontend:** React, Redux Toolkit, React Router, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **File Uploads:** Cloudinary
- **Email:** Nodemailer
- **Other:** Toast notifications, ESLint

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB instance (local or cloud)
- Cloudinary account (for media uploads)

### Installation

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/learn-bytes.git
cd learn-bytes
```

#### 2. Backend Setup

```sh
cd backend
npm install
```

- Create a `.env` file in `/backend` with the following variables:

  ```
  MONGODB_URL=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_cloudinary_name
  CLOUDINARY_API_KEY=your_cloudinary_key
  CLOUDINARY_API_SECRET=your_cloudinary_secret
  EMAIL_USER=your_email_address
  EMAIL_PASS=your_email_password
  ```

- Start the backend server:

  ```sh
  npm run dev
  ```

#### 3. Frontend Setup

```sh
cd ../frontend
npm install
```

- Create a `.env.local` file in `/frontend` with your backend API URL:

  ```
  VITE_REACT_APP_API_URL=http://localhost:5000
  ```

- Start the frontend dev server:

  ```sh
  npm run dev
  ```

- To access from other devices on your network:

  ```sh
  npm run dev -- --host
  ```

---

## Folder Structure

```
learn-bytes/
  backend/
    controllers/
    models/
    routes/
    middlewares/
    utils/
    config/
    ...
  frontend/
    src/
      components/
      features/
      pages/
      redux/
      services/
      utils/
      ...
```

---

## Usage

- Visit `http://localhost:5173` in your browser.
- Sign up as a new user and verify your email.
- Instructors can create courses and manage content.
- Students can browse, enroll, and review courses.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Tailwind CSS](https://tailwindcss.com/)