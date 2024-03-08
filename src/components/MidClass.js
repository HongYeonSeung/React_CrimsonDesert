import React, { useState } from "react";
import { motion } from "framer-motion";

function CharList({ id,Image, name, text }) {
  const [isHovered,setIsHovered] = useState(false);

  const handleHover = () =>{
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  return (
    <div className="job-BigBox">
      <div className="job-SmallBox">
        <div className={`job-Box-imgBox-${id} ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}>
          <img className="job-Box-img" src={Image} alt="클래스사진"></img>
        </div>
        <div className="job-Box-name">{name}</div>
        <div className="job-Box-text">{text}</div>
      </div>
    </div>
  );
}
function MidClass() {
  const chars = [
    {
      id: 1,
      Image: "./assets/char1.jpg",
      name: "워리어",
      text: "견고한 방패와 날카로운 검, 동료를 위해서라면 위험을 마다하지 않고 방패를 든다",
    },
    {
      id: 2,
      Image: "./assets/char2.jpg",
      name: "레인저",
      text: "바람의 활을 사용하는 레인저, 그녀의 시야에 맞추지 못하는 과녁은 없다. ",
    },
    {
      id: 3,
      Image: "./assets/char3.jpg",
      name: "캡틴",
      text: "위대한 모험가, 총과 칼 그리고 그의 선원들이 그가 가진 최고의 전력이다",
    },
    {
      id: 4,
      Image: "./assets/char4.jpg",
      name: "자이언트",
      text: "거대한 체격과 강인한 힘, 이 말 하나면 그를 설명하기 충분합니다",
    },
    {
      id: 5,
      Image: "./assets/char5.jpg",
      name: "흑마법사",
      text: "독, 전염병, 저주 그것들은 전부 흑마법사가 잘 다루는 마법들입니다 ",
    },
    {
      id: 6,
      Image: "./assets/char6.jpg",
      name: "주술사",
      text: "무슨 일이 일어났는지 알 수 없습니다, 그러면 주술사가 주변에 있다는 소리입니다",
    },
  ];
  return (
    <div className="MidClass">
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <div className="MidClass-TopName">『 클래스 』</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
      >
        <div className="MidClass-CharListBox">
          <div className="MidClass-CharList">
            {chars.map((el, index) => (
              <React.Fragment key={el.id}>
                <CharList
                  Image={el.Image}
                  name={el.name}
                  text={el.text}
                  id={`char-${el.id}`}
                />
                {index + 1 === 3 && (
                  <img
                    src="./assets/background.jpg"
                    alt="배경 아이콘"
                    className="MidClass-background"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="MidClass-BackLogo"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default MidClass;
