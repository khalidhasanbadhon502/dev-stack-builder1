# Dev Stack Builder 

A modern, interactive web application designed for developers to explore technologies, discover tools, and seamlessly build and customize their ideal tech stack.

---

##  Technologies Used

* **React** (with TypeScript)
* **Tailwind CSS**
* **Vite**
* **React Hot Toast**

---

##  Key Features

* **Interactive Tech Explorer:** Browse a curated collection of frontend, backend, database, and DevOps technologies with detailed ratings, levels, and badges.
* **Dynamic Stack Customization:** Add or remove technologies to build your personalized stack in real-time with instant sidebar updates.
* **Instant Feedback & Notifications:** Receive clear visual cues, styled card borders, and animated toast notifications when managing your stack.

---

##  React Questions & Answers

### 1. What is JSX, and why is it used in React?

**Answer:** JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript or TypeScript code, making component creation cleaner and more intuitive.

### 2. What is the difference between props and state?

**Answer:**

* **Props (Properties):** Read-only data passed down from a parent component to a child component to configure it.
* **State:** Internal, mutable data managed dynamically within a component that changes over time based on user interaction.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:** The `useState` hook allows functional components to manage local state. In this project, it was used to:

* Track the list of available technologies (`techList`).
* Handle user selections (`selectedStack`).
* Manage loading states (`loading`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:** The `useEffect` hook lets you perform side effects (like data fetching) in functional components. It was needed to fetch the `techdata.json` file asynchronously once when the component mounts without causing infinite re-renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** React uses unique keys to efficiently identify which items have changed, been added, or been removed in a list, ensuring optimal DOM rendering performance and state stability.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering is the process of rendering different UI elements or components based on specific conditions (such as using ternary operators or logical `&&`).

*Example from the project (Empty stack message):*

```tsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  
)}

```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**

* **Parent to Child:** Data is passed down via **props**.
* **Child to Parent:** A child sends data or triggers updates back to the parent by calling a **callback function** passed down as a prop from the parent.
