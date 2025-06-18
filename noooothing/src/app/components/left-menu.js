"use client";

export default function LeftMenu() {
  const headerId = document.getElementById("headerId");
  const footerId = document.getElementById("footerId");
  const DarkColor = () => {
      console.log("DARK!!!");
      headerId.style.backgroundColor = "#000";
      footerId.style.backgroundColor = "#000";
      footerId.style.color = "#fff";
      document.getElementById("bg").className = "dark";
  }
  const PinkColor = () => {
      console.log("PINK!!!");
      headerId.style.backgroundColor = "#E30B5D";
      footerId.style.backgroundColor = "#E30B5D";
      footerId.style.color = "#000";
      document.getElementById("bg").className = "pink";
  }
  const BlueColor = () => {
      console.log("BLUE!!!");
      headerId.style.backgroundColor = "#fff";
      footerId.style.backgroundColor = "#fff";
      footerId.style.color = "#000";
      document.getElementById("bg").className = "blue";
  }
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
