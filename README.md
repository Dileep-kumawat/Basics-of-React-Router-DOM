# Basics of React Router DOM

 A beginner-friendly React project demonstrating routing with **React Router DOM** - learn how to build multi-page navigation in a React single-page application (SPA). 

---

## 📺 Demo

Click below to watch the routing in action!

<video width="720" controls>
  <source src="./demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 🚀 Live Preview

🔗 **Live Demo:** [https://react5basicrouting.netlify.app/](https://react5basicrouting.netlify.app/)

---

## 🧠 About This Project

This project shows how to:

- Set up **React Router DOM** for navigation in a React app
- Use components like `<BrowserRouter>`, `<Routes>`, `<Route>`, and `<Link>` to define and navigate routes
- Navigate without full page refreshes - an essential part of SPAs 

---

## 📦 Features

✔ Home, About & Contact pages (or similar routes)  
✔ Navigation menu with React Router  
✔ Programmatic navigation (e.g., via `useNavigate`)  
✔ Optional dynamic routes with parameters  
✔ Clean and organized component structure

---

## 🛠️ Technologies Used

- **React** - Front-end UI library  
- **React Router DOM** - Client-side routing for React applications 
- **Vite** - Development build tool  
- **JavaScript, HTML & CSS**

---

## 🚀 Getting Started (Local Setup)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dileep-kumawat/Basics-of-React-Router-DOM.git

2. **Navigate to project folder**

   ```bash
   cd Basics-of-React-Router-DOM
   ```
3. **Install dependencies**

   ```bash
   npm install
   ```
4. **Start development server**

   ```bash
   npm run dev
   ```
5. Visit `http://localhost:5173` (or as shown in your terminal)

---

## 📁 Folder Structure

```
Basics-of-React-Router-DOM
├── public
├── src
│   ├── components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── demo.mp4
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 How Routing Works

React Router DOM lets you define URL paths that load specific components without page reloads. Key parts include: 

* **BrowserRouter** - Wraps the entire app for routing
* **Routes** - A container for all `<Route>` paths
* **Route** - Maps a URL path to a React component
* **Link** - Navigation links without refresh

Example:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📬 Feedback & Contributions

Thanks for checking out this project!
If you have suggestions or improvements, feel free to:

⭐ Star this repository • 📝 Open issues • 📦 Submit PRs

---

## 📝 License

MIT © Dileep Kumawat

---

## 🙌 Author

**Dileep kumawat**

- 📧 [dileepkumawat525@gmail.com](mailto:dileepkumawat525@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/dileep-kumawat/)

Feel free to connect or contribute!