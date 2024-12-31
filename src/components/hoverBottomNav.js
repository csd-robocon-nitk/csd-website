"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"

function HoverBottomNav({ helper }) {
  const [activeSection, setActiveSection] = useState("");
  let { scrollY } = useScroll()
  let upButtonColor = useTransform(scrollY, y => y < 150 ? "#94a3b8" : "white")
  let upButtonBg = useTransform(scrollY, y => y < 150 ? "transparent" : "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
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
    <div className="left-1/2 -translate-x-1/2 fixed bottom-5 rounded z-[999] flex justify-center">
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
        <motion.div
          className={`rounded-full duration-300 p-2 ml-0.5 cursor-pointer text-sm hover:bg-slate-50/20 ${scrollY.current == 0 ? "text-slate-400" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style = {{ color: upButtonColor, backgroundColor: upButtonBg }}
        >
          <MdOutlineKeyboardDoubleArrowUp size={18} />
        </motion.div>
      </div>
    </div>
  );
}

export default HoverBottomNav;
