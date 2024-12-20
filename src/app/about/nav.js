import React, { use } from "react";
import { useState, useEffect } from "react";
import { entries } from "../../../backend/config/middlewares";

function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`${entry.target.id}: ${entry.intersectionRatio}`);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: `-80px 0px 0px 0px`,
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

  const helper = [
    { href: "top", label: "Top" },
    { href: "mission", label: "Mission" },
    { href: "objectives", label: "Objectives" },
    { href: "impact", label: "Impact" },
    { href: "whatwedo", label: "What We Do" },
  ];

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
    <div className="right-4 fixed top-1/2 bg-white/90 rounded p-4 z-10">
      <ul>
        {helper.map((item, index) => (
          <li
            key={index}
            className={
              activeSection == item.href
                ? "bg-sky-200 rounded p-2 transition-all duration-300 cursor-pointer"
                : "transition-all duration-300 cursor-pointer"
            }
            onClick={scrollToSection}
            href={`#${item.href}`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
