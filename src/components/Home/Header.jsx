import React from "react";

export default function Header() {
  return (
    <div>
      <section className="landing-hero pt-5 bg-green-400">
        <div className="header__bg " />
        <div className="container mx-auto relative">
          <header className="flex items-center">
            <div style={{ height: 54 }} className="pr-5">
              <img
                src={"assets/images/logopolos.png"}
                alt="logo"
                className="h-full"
              />
            </div>
            <ul className="flex items-center">
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/projects"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/features.html"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/story.html"
                >
                  Success Stories
                </a>
              </li>
            </ul>
            <ul className="flex ml-auto items-center mt-2">
              <li>
                <a
                  href="/register.html"
                  className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
                >
                  Daftar
                </a>
              </li>
              <li>
                <a
                  href="/login.html"
                  className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
                >
                  Login
                </a>
              </li>
            </ul>
          </header>
        </div>
      </section>
    </div>
  );
}
