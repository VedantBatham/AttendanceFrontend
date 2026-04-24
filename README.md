# 🎓 Student Attendance Frontend

A role-based **Student Attendance Management System Frontend** built during a hackathon using **Angular CLI**.

This project focuses on creating a clean and modular frontend architecture for attendance management with separate dashboards for **Students** and **Teachers**, along with secure routing using **Auth Guards**.

---

## 🚀 Features

- 🔐 **Role-Based Login**
  - Users can log in as **Student** or **Teacher**
  - Role selection available on login page

- 🛡️ **Authentication Guards**
  - Protected routes using Angular **Auth Guards**
  - Prevents unauthorized navigation

- 🔄 **Multiple Routing Modules**
  - Role-specific navigation and page routing
  - Structured Angular Router implementation

- 👨‍🎓 **Student Dashboard**
  - Dedicated student interface
  - Access academic resources

- 👨‍🏫 **Teacher Dashboard**
  - Dedicated teacher interface
  - Attendance marking interface

- 📅 **Planner Module**
  - Add and manage plans

- ✅ **Attendance Module**
  - Teacher-side attendance marking component

- 📚 **Resources View**
  - Students can access shared resources




## 🛠️ Tech Stack

- **Framework:** Angular CLI
- **Language:** TypeScript
- **Routing:** Angular Router
- **Authentication:** Route Guards
- **Styling:** CSS / Angular default styling

---

## ▶️ Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to:

```bash
http://localhost:4200/
```

The application will automatically reload whenever you modify any of the source files.

---

## ⚙️ Code Scaffolding

Angular CLI includes powerful code scaffolding tools.

To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics:

```bash
ng generate --help
```

---

## 🏗️ Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory.

The production build optimizes the application for performance and speed.

---

## 🧪 Running Unit Tests

To execute unit tests with the Karma test runner:

```bash
ng test
```

---

## 🔍 Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default, so you can choose one as per your requirement.

---

## 📌 Project Context

This project was developed as a **hackathon prototype**, with a primary focus on:
- frontend architecture
- modular component design
- role-based navigation
- protected routes

Currently, this repository contains the **frontend implementation only**.

---

## 📖 Additional Resources

For more information on Angular CLI, visit the official documentation:

https://angular.dev/tools/cli
