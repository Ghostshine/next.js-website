"use client";
import { useEffect, useState } from "react";

export default function LeftMenu() {
  const [elements, setElements] = useState({ headerId: null, footerId: null, bg: null });

  useEffect(() => {
    const header = document.getElementById("headerId");
    const footer = document.getElementById("footerId");
    const bg = document.getElementById("bg");

    if (header && footer && bg) {
      setElements({ headerId: header, footerId: footer, bg: bg });
    }
  }, []);

  const DarkColor = () => {
    console.log("DARK!!!");
    if (!elements.headerId || !elements.footerId || !elements.bg) return;
    elements.headerId.style.backgroundColor = "#000";
    elements.footerId.style.backgroundColor = "#000";
    elements.footerId.style.color = "#fff";
    elements.bg.className = "dark";
  };

  const PinkColor = () => {
    console.log("PINK!!!");
    if (!elements.headerId || !elements.footerId || !elements.bg) return;
    elements.headerId.style.backgroundColor = "#E30B5D";
    elements.footerId.style.backgroundColor = "#E30B5D";
    elements.footerId.style.color = "#000";
    elements.bg.className = "pink";
  };

  const BlueColor = () => {
    console.log("BLUE!!!");
    if (!elements.headerId || !elements.footerId || !elements.bg) return;
    elements.headerId.style.backgroundColor = "#fff";
    elements.footerId.style.backgroundColor = "#fff";
    elements.footerId.style.color = "#000";
    elements.bg.className = "blue";
  };

  return (
    <div>
      Zmień kolor:
      <ul className="color-items">
        <li><button className="btn btn-outline-secondary" onClick={DarkColor}>Dark</button></li>
        <li><button className="btn btn-outline-danger" onClick={PinkColor}>Pink</button></li>
        <li><button className="btn btn-outline-primary" onClick={BlueColor}>Blue</button></li>
      </ul>
    </div>
  );
}