import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBtn = () => {
  const right = "->";
  const left = "<-";

  const navigate = useNavigate();
  const location = useLocation();
  const [ptr, setPtr] = useState(0);

  let currentWindow = ["/", "/about", "/dashboard"];

  useEffect(() => {
    const currentIndex = currentWindow.indexOf(location.pathname);
    setPtr(currentIndex !== -1 ? currentIndex : 0);
  }, [location.pathname]);

  const handleLeftClick = () => {
    const newPtr = ptr - 1 < 0 ? currentWindow.length - 1 : ptr - 1;
    setPtr(newPtr);
    navigate(currentWindow[newPtr]);
  };

  const handleRightClick = () => {
    const newPtr = ptr + 1 >= currentWindow.length ? 0 : ptr + 1;
    setPtr(newPtr);
    navigate(currentWindow[newPtr]);
  };

  return (
    <div className="flex gap-4">
      <button className="btn" onClick={handleLeftClick}>
        {left}
      </button>
      <button className="btn" onClick={handleRightClick}>
        {right}
      </button>
    </div>
  );
};

export default NavBtn;
