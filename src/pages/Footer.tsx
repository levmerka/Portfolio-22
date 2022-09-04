import React from "react";

const Footer = () => {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center", marginTop: "25px" }}>
        Mitchell Lev Merka
      </h1>
      <div style={{ color: "red", textAlign: "center" }}>
        <h6>Links:</h6>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/levmerka">Github</a>
          </li>
          <li>
            <a href="mailto: lev@merka.us">Email</a>
          </li>
          <li>
            <a href="https://linktr.ee/levmerka">Linktree</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
