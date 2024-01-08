
# BCAD Connect Backend

Bridging Bangladeshi-Canadian Communities, One Connection at a Time.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Authentication Routes](#authentication-routes)
- [Post Routes](#post-routes)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Introduction

BCAD Connect is a platform designed to bridge Bangladeshi-Canadian communities by fostering connections and relationships.

## Features

- Meet with Local BCADians
- Ask help through posts and connections
- Help others

## Getting Started

To get started with BCAD Connect, follow the steps below:

### Prerequisites

- Node.js (>=14.0.0)
- MongoDB

### Installation

```bash
# Clone the repository
git clone https://github.com/chnspart/bcad-connect.git

# Change directory
cd bcad-connect

# Install dependencies
npm install
```

## Configuration

Configure the application by setting up environment variables, database connections, etc.

## Authentication Routes

These routes handle user authentication.

### Register

```http
POST /auth/register
```

Register a new user.

### Login

```http
POST /auth/login
```

Authenticate and log in a user.

### Register Page (Rendered)

```http
GET /auth/register
```

Render the registration page.

### Login Page (Rendered)

```http
GET /auth/login
```

Render the login page.

## Post Routes

These routes handle posts and feed.

### Get Feed Posts

```http
GET /posts
```

Get posts for the user's feed.

### Get User Posts

```http
GET /posts/:userId/posts
```

Get posts for a specific user.

### Like Post

```http
PATCH /posts/:id/like
```

Like a post.

### Create Post

```http
POST /posts
```

Create a new post.

## Middleware

Explain any middleware used in your application, such as authentication middleware.

## Contributing

Contribute to BCAD Connect by following these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

For more details, see the [Contributing Guidelines](CONTRIBUTING.md).

---

**Project by [Touhidul Islam Chayan](https://github.com/chnspart) | Website: [www.chnspart.com](https://www.chnspart.com)** | **[Homepage](https://github.com/chnspart/bcad-connect)** | **[Report Issues](https://github.com/chnspart/bcad-connect/issues)**
