import React from "react";
import "./copy.css";

const CopyRight = () => {
  return (
    <div className="copyright-container">
      <p>© {new Date().getFullYear()} Jayasriraam. All rights reserved.</p>
    </div>
  );
};

export default CopyRight;
