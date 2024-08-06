# Task Management Application with Typescript

## Overview

This is a Task Management Application built with TypeScript, React, and Auth0 for authentication. The application allows users to register, log in, create, view, and manage tasks.

## Features

- User Registration
- User Login
- Google Authentication
- Create, View, Edit, and Delete Tasks
- Mark Tasks as Completed

## Project Structure

task-dashboard/
│
├── public/
│   ├── index.html
│   └── …
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Register1.tsx
│   │   ├── ResetPassword.tsx
│   │   ├── TaskDetails.tsx
│   │   └── TaskForm.tsx
│   ├── context/
│   │   ├── actions.ts
│   │   ├── reducer.ts
│   │   ├── TaskContext.tsx
│   │   └── types.ts
│   ├── css/
│   │   ├── login.css
│   │   ├── register.css
│   │   ├── dashboard.css
│   │   ├── styles.css
│   ├── utils/
│   │   └── auth.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── …
└── …

## Setup and Installation

### Installation

1. Clone the repository:

```bash
git clone git@github.com:rostovks94/Mini-Project-Task-Management-Application-with-Typescript-Project.git
cd Mini-Project-Task-Management-Application-with-Typescript-Project

	2.	Install the dependencies:

npm install

	3.	Create a .env file in the root of the project and add your Auth0 configuration:

REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id

	4.	Start the development server:

npm start

The application will be available at http://localhost:3000.

