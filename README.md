# SecureAuthentication

SecureAuthentication is a robust and secure authentication system built using MongoDB, Express.js, Node.js. This project provides a solid foundation for implementing user authentication and authorization in your web applications. It incorporates best practices for security, scalability, and maintainability.

## Key Features:
- MERN Stack: Utilizes the power of MongoDB, Express.js, React, and Node.js to create a full-stack authentication solution.
- JWT Authentication: Implements JSON Web Tokens (JWT) for secure and stateless authentication.
- Password Hashing: Safely stores user passwords using bcrypt for protection against data breaches.
- Email Verification: Includes email verification functionality to ensure user authenticity.
- GitHub Actions Workflow: Automates Docker image builds and deployments, making it easy to deploy updates.
- Docker Containerization: Enables seamless deployment using Docker containers, ensuring consistency across environments.
- Render.com Integration: Deploy your backend on Render.com for a hassle-free hosting experience with SSL support.
## Installation and Setup

1. Clone the repository:
```
   git clone https://github.com/tonykalalian/SecureAuthentication.git
   cd SecureAuthentication
   ```
2. Install backend dependencies:
```
cd backend
npm install
```
3. Set up environment variables:
Create a .env file in the backend directory and configure the following variables:
```
PORT=?
DB_URI=?
JWT_SECRET=?
JWT_EXPIRE=?
EMAIL_HOST=?
EMAIL_PORT=?
EMAIL_USERNAME=?
EMAIL_PASSWORD=?
CORS_ORIGIN=?
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
