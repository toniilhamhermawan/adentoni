"use client"; // This directive indicates that this is a client component

import React, { useState } from 'react';
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import Skills from "./components/skills";
import Myinfos from "./components/myinfos";
import Hobbies from "./components/hobbies";
import Contactrating from "./components/contactrating";
import './toni-style.css';

export default function MyApp() {
  const [theme, setTheme] = useState<string>('light'); // Default theme

  // Function to toggle the theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('favoriteColor'); // Change 'favoriteColor' to your actual favorite color
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={`app ${theme}`}>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 bg-indigo-500 text-white font-bold py-2 px-4 rounded"
      >
        Toggle Theme
      </button>
      <section>
        <Hero />
        <RiwayatPendidikan />
        <RiwayatPekerjaan />
        <Skills />
        <Myinfos />
        <Hobbies />
        <Contactrating />
      </section>
    </div>
  );
}
