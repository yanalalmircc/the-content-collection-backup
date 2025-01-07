"use client";

export const Button = () => {
  const handleClick = () => {
    const popup = document.getElementById("popupOverlay");
    popup?.classList.add("show");
  };

  return (
    <button className="submitbutton" onClick={handleClick}>
      Continue
    </button>
  );
};
