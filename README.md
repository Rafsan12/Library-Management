Library Management System
A modern, responsive web-based Library Management System built with React, TypeScript, Redux, and Tailwind CSS. This application streamlines library operations, allowing librarians to manage books efficiently with features like adding, editing, and tracking book records. The system uses Redux for global state management, ensuring scalable and predictable state updates. It features a user-friendly interface, a custom loading animation, and responsive design for seamless use across devices.
Features

Add New Books: Easily add books with details such as title, author, genre, ISBN, description, copies, and availability status.
Edit Existing Books: Update book information with a pre-filled form for quick modifications.
Responsive Design: Optimized for desktops, tablets, and mobile devices using Tailwind CSS.
Custom Loading Animation: Displays a visually appealing spinning book icon during form submissions.
Type-Safe Development: Built with TypeScript for robust type checking and better code maintainability.
Global State Management: Uses Redux for managing book data and application state across components.
Form Validation: Ensures required fields (title, author, ISBN, copies) are filled before submission.
User-Friendly Interface: Clean and modern UI with intuitive input fields and controls.

Tech Stack

Frontend: React, TypeScript, Tailwind CSS
State Management: Redux (for global state) and React Hooks (useState for local state)
Build Tool: Vite (assumed, can be updated based on your setup)
Other Dependencies: None explicitly required for the provided components

Prerequisites
Before running the project, ensure you have the following installed:

Node.js: Version 16.x or higher
npm: Version 7.x or higher (or Yarn/pnpm if preferred)
Git: For cloning the repository

Installation

Clone the Repository:
git clone https://github.com/Rafsan12/Library-Management.git
cd Library-Management

Install Dependencies:
npm install

This will install React, Redux, TypeScript, Tailwind CSS, and other dependencies listed in package.json.

Run the Development Server:
npm run dev

Open your browser and navigate to http://localhost:5173 (or the port specified by your setup).

Build for Production:
npm run build

The production-ready files will be generated in the dist folder.

Usage

Access the Application:

Open the application in your browser after starting the development server.
You’ll see a form to add or edit books, depending on the mode (add or edit).

Add a Book:

Fill in the form fields: Title, Author, Genre (select from dropdown), ISBN, Description, Copies (number), and Availability (checkbox).
Click the Add Book button to submit the form.
A loading animation with a spinning book icon will appear during submission, managed via Redux state.

Edit a Book:

If the form is in edit mode (passed via props), it will pre-populate with existing book data from the Redux store.
Modify the fields as needed and click Update Book to save changes.

Project Structure
Library-Management/
├── src/
│ ├── components/
│ │ ├── BookForm.tsx # Form component for adding/editing books
│ │ ├── Loading.tsx # Custom loading animation component
│ ├── interface/
│ │ ├── interface.ts # TypeScript interfaces for Book and BookFormProps
│ ├── store/
│ │ ├── index.ts # Redux store configuration
│ │ ├── slices/
│ │ │ ├── bookSlice.ts # Redux slice for managing book data
│ ├── App.tsx # Main application component
│ ├── main.tsx # Entry point for React
│ ├── index.css # Global styles (Tailwind CSS)
├── public/ # Static assets
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
└── README.md # Project documentation

Available Scripts

npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build locally.
npm run lint: Runs ESLint for code linting (if configured).
npm run format: Runs Prettier for code formatting (if configured).

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Make your changes and commit: git commit -m "Add your feature".
Push to the branch: git push origin feature/your-feature-name.
Open a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, reach out to the project maintainer:

GitHub: Rafsan12
Email: [Your email address, if you’d like to include it]

Built with ❤️ by Rafsan12
