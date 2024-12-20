import React, { use } from "react";
import { useState, useEffect } from "react";
import { entries } from "../../backend/config/middlewares";

function HoverBottomNav({ helper }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            console.log("hehehe")
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entries.map((entry) => {
              console.log(entry.target.id);
            });
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -59.5% 0px",
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const section = document.querySelector(href);
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 75;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="right-4 fixed bottom-5 rounded z-10 flex justify-center w-full">
      <div className="flex justify-center bg-sky-800/90 backdrop-blur-sm text-white shadow-md items-center py-2 px-2 rounded-full">
        {helper.map((item, index) => (
          <div
            key={index}
            className={
              activeSection == item.href
                ? "bg-white text-sky-800 rounded-full p-2 transition-all duration-300 cursor-pointer text-sm"
                : "transition-all duration-300 p-2 cursor-pointer text-sm"
            }
            onClick={scrollToSection}
            href={`#${item.href}`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoverBottomNav;
