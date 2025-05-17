# Budget Tracker API

A Node.js API built with Express, MongoDB (Mongoose), and CORS for tracking user budgets, incomes, and expenses with authentication.

## Features

[] User authentication (register/login)

[x] JWT-based authorization

[x] Income tracking

[x] Expense tracking

[x] Budget management

[x] User-specific data isolation

### Technologies Used
[x] Node.js

[x] Express.js

[x] MongoDB (Mongoose ODM)

[x] CORS

[x] JSON Web Tokens (JWT)

[x] Bcrypt (password hashing)

### API Structure
```sh
src/
├── config/            # Configuration files
│   └── db.js          # MongoDB connection
├── controllers/       # Route controllers
│   ├── auth.js        # Authentication controllers
│   ├── budget.js      # Budget controllers
│   ├── income.js      # Income controllers
│   └── expense.js     # Expense controllers
├── middleware/        # Custom middleware
│   ├── auth.js        # Authentication middleware
│   └── error.js       # Error handling middleware
├── models/            # Mongoose models
│   ├── User.js        # User model
│   ├── Budget.js      # Budget model
│   ├── Income.js      # Income model
│   └── Expense.js     # Expense model
├── routes/            # API routes
│   ├── auth.js        # Authentication routes
│   ├── budgets.js     # Budget routes
│   ├── incomes.js     # Income routes
│   └── expenses.js    # Expense routes
├── utils/             # Utility functions
│   └── helpers.js     # Helper functions
├── app.js             # Express app configuration
└── server.js          # Server entry point
```

### Installation

Clone the repository:
```sh
bash
git clone https://github.com/yourusername/budget-tracker-api.git
cd budget-tracker-api
Install dependencies:

bash
npm install
Create a .env file in the root directory with the following variables:
```

```js
PORT=3000
MONGODB_URI=mongodb://localhost:27017/budget-tracker
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
Start the server:
```

### bash
```sh
npm run dev
API Endpoints
```

### Authentication
```sh

POST /api/auth/register - Register a new user

POST /api/auth/login - Login user

GET /api/auth/me - Get current user (protected)
```

### Budgets
```sh
POST /api/budgets - Create a new budget (protected)

GET /api/budgets - Get all budgets for user (protected)

GET /api/budgets/:id - Get single budget (protected)

PUT /api/budgets/:id - Update budget (protected)

DELETE /api/budgets/:id - Delete budget (protected)
```

### Incomes
```js
POST /api/incomes - Add new income (protected)

GET /api/incomes - Get all incomes for user (protected)

GET /api/incomes/:id - Get single income (protected)

PUT /api/incomes/:id - Update income (protected)

DELETE /api/incomes/:id - Delete income (protected)
```

### Expenses
```js
POST /api/expenses - Add new expense (protected)

GET /api/expenses - Get all expenses for user (protected)

GET /api/expenses/:id - Get single expense (protected)

PUT /api/expenses/:id - Update expense (protected)

DELETE /api/expenses/:id - Delete expense (protected)

```