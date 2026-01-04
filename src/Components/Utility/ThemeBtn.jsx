import React, { useEffect, useState } from "react";

const ThemeBtn = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div>
      <input
        onChange={(e) => handleTheme(e.target.checked)}
        type="checkbox"
        defaultChecked={localStorage.getItem("theme") === "dark"}
        className="toggle mr-2"
      />
    </div>
  );
};

export default ThemeBtn;
