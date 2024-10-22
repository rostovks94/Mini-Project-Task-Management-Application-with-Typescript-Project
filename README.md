# Task Management Application with TypeScript

## Overview
This project is a Task Management Application built using TypeScript and React. It provides a functional and interactive interface for managing tasks, including features such as task lists, creation, editing, and deletion. The project was completed as part of a homework assignment during the Coding Temple bootcamp.

## Features
- **Task Dashboard Page**: Manage tasks through a dashboard interface, including task viewing, creation, editing, and deletion.
- **Task Details Page**: Displays detailed information for individual tasks, with the ability to modify task details.
- **Task Creation and Editing Pages**: Forms for creating and editing tasks, with TypeScript types for data validation and error handling.
- **Authentication and Authorization Pages**: User authentication implemented using Auth0, including registration, login, and password reset functionalities.
- **State Management with Typed Hooks**: Utilize React's useState and useReducer hooks with TypeScript to manage application state effectively.
- **Context API for Global State Management**: Implemented Context API in React with TypeScript for global state management and data sharing between components.
-**Error Handling and Validation**: TypeScript types were used to handle error objects and provide smooth form validation.

## Project Structure
The structure of the project is as follows:
```bash
task-dashboard/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
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
│   ├── utils/
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── auth0-config.ts
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── useTask.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Technology Stack
- **TypeScript**: Used to ensure type safety and enhanced code maintainability.
- **React**: For building the user interface with reusable components.
- **Auth0**: For implementing authentication and authorization.
- **Vite**: As the build tool for faster development and optimized production build.

## Running the Project Locally
   
1. **Clone the repository**:
   ```bash
   https://github.com/rostovks94/Mini-Project-Task-Management-Application-with-Typescript-Project.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd task-dashboard
   ```
   
3. **Install the required dependencies**:
   ```bash
   npm install
   ```
5. **Start the development server**:
   ```bash
   npm run dev
   ```

7. **Open your browser and navigate to**:
   ```bash
   http://localhost:5173
   ```

## Conclusion
This project demonstrates the practical implementation of TypeScript in a React application to build a Task Management tool with state management, authentication, and error handling. The completion of this task as part of the **Coding Temple** Bootcamp showcases both front-end development skills and the ability to work with type-safe code using TypeScript.


Feel free to reach out if you have any questions or suggestions.
