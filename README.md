# Authentication System with Next.js 15 and Auth.js (NextAuth V5)

This project implements an authentication system using **Next.js 15**, **Auth.js (NextAuth V5)**, and other modern technologies such as **Prisma 6**, **Cloudflare Workers**, and **Shadcn UI**. The authentication system is designed to be secure, scalable, and easy to integrate into any Next.js project.

## Key Features

This authentication system includes the following features:

- **Authentication Form:**
  - Uses **React Hook Form** for efficient form management.
  - **Zod** is used for data validation in the forms.
- **User Interface (UI):**
  - Reusable components built with **Shadcn UI** and **Radix UI** for a modern, accessible user experience.
- **Authentication and Security:**

  - Implemented with **Next Auth (Auth.js V5)** using **JWT** (JSON Web Tokens) for secure session management.
  - **Two-Factor Authentication (2FA)** for enhanced security.
  - **Password recovery** and **email verification** features.

- **Database:**
  - Managed with **Prisma 6** and supports **PostgreSQL 17.3**.
- **User Roles:**

  - A role-based user system that allows managing user access and privileges.

- **Docker Development:**

  - The project is set up to run in Docker containers, making it easy to deploy and scale.

- **Other Features:**
  - **bcrypt** is used for securely encrypting passwords.
  - **Environment variables** are used to securely manage API keys, database credentials, and other sensitive data.

## Technologies Used

The project is built with the following technologies:

| Technology              | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| **Next.js 15**          | React framework for modern web applications.            |
| **Tailwind CSS**        | Utility-first CSS framework for rapid design.           |
| **TypeScript**          | A statically typed superset of JavaScript.              |
| **Next Auth (Auth.js)** | Authentication system with JWT and OAuth support.       |
| **Prisma 6**            | ORM for databases that simplifies queries.              |
| **React Hook Form**     | Library for managing forms in React.                    |
| **Zod**                 | Library for data validation.                            |
| **Shadcn UI**           | Reusable UI components for building modern interfaces.  |
| **Radix UI**            | A library of accessible, unstyled UI components.        |
| **bcrypt**              | Library for securely hashing passwords.                 |
| **PostgreSQL 17.3**     | Relational database used in the project.                |
| **Docker**              | Platform for containerizing and deploying applications. |

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** 20+ (Download from [here](https://nodejs.org/))
- **bun** (A fast JavaScript bundler, download from [here](https://bun.sh/))

## Running the Project Locally

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone <REPOSITORY_URL>
   ```

# Project Setup Instructions

## Navigate to the Project Directory

```bash
cd <PROJECT_NAME>
```

## Install Dependencies

We use **bun** to install project dependencies:

```bash
bun install
```

## Start the Docker Container

If you're using Docker for the database and services:

```bash
docker compose up -d
```

## Start the Development Server

```bash
bun dev
```

## Access the Project

Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Configuration

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone <REPOSITORY_URL>
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd <PROJECT_NAME>
   ```

3. **Install Dependencies**:

   ```bash
   bun install
   ```

4. **Configure Environment Variables**:

   Copy the `.env.example` file to `.env` and update the configuration to match your environment:

   ```bash
   cp .env.example .env
   ```

   Make sure to properly configure the credentials for PostgreSQL, NextAuth, and any other external APIs or services you're using.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. **Fork the Repository on GitHub**.

2. **Create a Branch for Your New Feature**:

   ```bash
   git checkout -b new-feature
   ```

3. **Make Your Changes and Commit**:

   ```bash
   git commit -m 'Add new feature'
   ```

4. **Push Your Branch to the Remote Repository**:

   ```bash
   git push origin new-feature
   ```

5. **Open a Pull Request in this repository and describe the changes you made**.

## License

This project is licensed under the MIT License. You can read the license file [here](LICENSE).
