# React Questionnaire App

This project is a simple React-based questionnaire application that showcases a set of questions and collects user responses. It leverages TypeScript, Tailwind CSS, and Vite for a modern and efficient development experience.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types, which helps with development and maintenance.
- **Tailwind CSS**: A utility-first CSS framework for designing modern and responsive user interfaces.
- **Vite**: A build tool that provides a fast development environment and optimized production builds.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Project Structure

- **`src/`**: Contains all the source code for the application.
  - **`components/`**: Reusable UI components such as `Button` and `Question`.
  - **`hooks/`**: Custom hooks for handling application logic, like `useFetchQuestions` and `useQuestionActions`.
  - **`pages/`**: Different pages of the application, including `Questions` and `ThankYou`.
  - **`data/`**: Contains static data like `questions.ts`.
  - **`types.ts`**: TypeScript type definitions used throughout the project.
  - **`main.tsx`**: The main entry point for the React application.
- **`public/`**: Contains static assets like images.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`vite.config.ts`**: Configuration file for Vite.
- **`package.json`**: Contains project metadata and dependencies.
- **`README.md`**: This documentation file.
- **`tsconfig.json`**: TypeScript configuration file.

## Design Extensibility

The design of this project is modular and easy to extend:

1. **Component-Based Architecture**: The use of React components allows for easy reuse and extension. Components such as `Button`, `Question`, and `ThankYou` are isolated and can be modified or replaced independently.
2. **Custom Hooks**: The `useQuestionActions` hook encapsulates the logic for managing questions and answers, making it easy to adjust or extend the functionality without changing the component code.
3. **TypeScript**: TypeScript’s static type checking helps catch potential issues early and makes it easier to add new features with confidence.
4. **Tailwind CSS**: Tailwind’s utility-first approach allows for quick adjustments to the styling without touching the core logic of the components.

### Adding New Features

To add new features or extend the application:

- **New Components**: Add new components to the `components/` directory and integrate them where needed.
- **Additional Pages**: Create new page components in the `pages/` directory and configure routing if necessary.

## Facilitating Future Testing

Although immediate testing is not required, the code is organized to facilitate easy testing in the future:

1. **Clear Component Structure**: Components are clearly defined and focused on single responsibilities, which simplifies writing tests to verify their behavior.

2. **Encapsulated Logic**: Custom hooks encapsulate business logic, making it easier to test functionalities independently from the UI.

3. **Consistent Patterns**: Adhering to consistent coding and architectural patterns helps ensure that future tests can be written in a predictable manner.

4. **Type Definitions**: TypeScript definitions provide a contract for the components and functions, making it clear what inputs and outputs are expected, which assists in writing accurate tests.

Testing is crucial for maintaining the quality and reliability of the application. The project can

## Setup

1. **Install Dependencies**: Ensure you have all the dependencies installed by running:

   ```bash
   yarn install
   ```

2. **Start dev server**:
   ```bash
   yarn install
   ```
