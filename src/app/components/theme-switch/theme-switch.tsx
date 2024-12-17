"use client"

import Reactm, { useEffect, useState } from 'react'

const ThemeSwitch: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme === 'dark' || (savedTheme === 'auto' && prefersDark);

    setIsDarkTheme(initialTheme);
    document.body.classList.toggle('dark-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };
  return (
    <div>
      <button onClick={toggleTheme}>
        Switch theme {isDarkTheme ? 'clair' : 'sombre'}
      </button>
    </div>
  )
}

export default ThemeSwitch