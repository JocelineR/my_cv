"use client";
import React, { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && (
        <div className="sidebar-content">
          <aside className="bg-tealGreen text-beige w-55 h-full min-h-screen p-6 ">
            <nav>
              <ul>
                <li className="mb-4">
                  <a href="#main-info" className="text-lg hover:text-blue-400">
                    Main Info
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#experience" className="text-lg hover:text-blue-400">
                    Experience
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#education" className="text-lg hover:text-blue-400">
                    Education
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#skills" className="text-lg hover:text-blue-400">
                    Habilidades
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default SideBar;

/*

<ul>
          <li className="mb-4">
            <Link className="text-beige hover:text-pastelBlue" href="/">
              Main Info
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="text-beige hover:text-pastelBlue"
              href="/experience"
            >
              Experience
            </Link>
          </li>
          <li className="mb-4">
            <Link
              className="text-beige hover:text-pastelBlue"
              href="/education"
            >
              Education
            </Link>
          </li>
          <li className="mb-4">
            <Link className="text-beige hover:text-pastelBlue" href="/skills">
              Skills
            </Link>
          </li>
        </ul>

  */
