import React, { useEffect, useState } from "react";

function Badge() {
  const [hidden, setHidden] = useState(false);
  const handleHide = () => {
    setHidden(true);
  };
  //스크롤
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  // <div className={scrollPosition < 900 ? "badge-box" : "badge-boxani"}>

  return (
    <div className="badge">
      {!hidden && (
        <div className="badge-box">
          <a href="/">
            <img
              className={scrollPosition > 500 ? "badge-badgeimg" : "badge-badgeimg-ani"}
              src="./assets/badge.png"
              alt="사전예약"
            />
          </a>
          <button style={{ cursor: "pointer" }} onClick={handleHide}>
            <img className={scrollPosition > 500 ? "badge-close": "badge-close-ani"} src="./assets/close.png" alt="닫기" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Badge;
