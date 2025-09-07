import React from "react";
import "./MenuBar.css";

function MenuBar({ username, isHelper, onBack }) {
  return (
    <div className="menubar">
      <div className="welcome">
        👋 Welcome, <span className="name">{username}</span>
        {isHelper && <span className="badge"> 🌟 Verified</span>}
      </div>
      <button className="back-btn" onClick={onBack}>
        ⬅ Back to Home
      </button>
    </div>
  );
}

export default MenuBar;
