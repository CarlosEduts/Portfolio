"use client";
import { useEffect, useState } from "react";
import { IconSun, IconSunOff } from "@tabler/icons-react";

export default function ButtonTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Verifica se o usuário já tem um tema salvo
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button id="theme-toggle" title="Alterar o tema" onClick={toggleTheme}>
      {theme === "dark" ? (
        <IconSunOff stroke={2} className="header-icon" />
      ) : (
        <IconSun stroke={2} className="header-icon" />
      )}
    </button>
  );
}
