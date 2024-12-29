import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div style={{ border: "3px solid #ccc", color: "#666", padding: "10px", width: "200px" }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/files">FilesPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
