import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="mr-10">
      <button
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full flex items-center"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun className="" /> : <FaMoon className="" />}
      </button>
    </div>
  );
}

export default ThemeToggle;
