# SecureAuth Pro

SecureAuth Pro is a robust MERN (MongoDB, Express, React, Node.js) full-stack application that provides advanced authentication features. With focus on security and user experience, SecureAuth Pro offers functionalities like user registration, login, email verification, password reset, and access to private data in a secure and efficient manner. The backend utilizes technologies like JWT (JSON Web Tokens), bcrypt.js for password hashing, Nodemailer for email communication, and mongoose for database interactions. The frontend is built using React to ensure a seamless and intuitive user interface.

## Installation and Setup

1. Clone the repository:
```
   git clone <repository_url>
   cd secureauth-pro
   ```
2. Install backend dependencies:
```
cd backend
npm install
```
3. Set up environment variables:
Create a .env file in the backend directory and configure the following variables:
```
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
JWT_EXPIRE=<jwt_token_expiry>
```
4. Install frontend dependencies:
```
cd ../frontend
npm install
```
5. Start the application:
```
npm run dev
```
## Features
User Registration: Allow users to sign up with a unique username and email.
User Login: Authenticate users using their email and password.
Email Verification: Send verification emails to newly registered users.
Password Reset: Allow users to reset their passwords via email.
Access Private Data: Provide authorized users access to protected routes.
## Technologies Used
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt.js, Nodemailer
Frontend: React.js
## Usage
Register a new user by providing a unique username, email, and password.
Log in using your registered email and password.
Explore the secure authentication features, including email verification and password reset.
Access private data through protected routes.
## Contributions
Contributions are welcome! If you find a bug or have a feature request, please create an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries or support, please contact us at tkalalian@gmail.com.
