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
import Color from "./components/color"

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
  const [warna, setWarna] = useState("light"); // Menambahkan state untuk warna
  return (

    <section
      className={`min-h-screen p-4 transition-colors duration-300 ${warna === "dark"
          ? "bg-black text-white"
          : warna === "light"
            ? "bg-white text-black"
            : "bg-green-300 text-gray-900"
        }`}
    >
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <Myinfos />
      <Hobbies />
      <Contactrating />
      <Color setWarna={setWarna} />
    </section>

  );
}
