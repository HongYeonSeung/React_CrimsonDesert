import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

function Worldview() {
  const animationControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        animationControls.start({ opacity: 1, y: 0 });
      } else {
        animationControls.start({ opacity: 0, y: 600 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationControls]);

  const items = [
    {
      src: "./assets/back7.jpg",
      maintext: "늪지대",
      text: "무슨일이 벌어져도 알수없는 늪지대입니다 어떤 일이던지요. 이곳은 수많은 미지의 위험이 도사리고 있습니다.",
    },
    {
      src: "./assets/back8.jpg",
      maintext: "외곽 성벽",
      text: "전쟁을 위해 지어진 왕국의 성벽입니다, 지금은 주로 마물의 방어용으로 사용되고있습니다. 성벽 너머에는 무역의 중심지가 펼쳐져 있습니다.",
    },
    {
      src: "./assets/back3.jpg",
      maintext: "북쪽 설산",
      text: "북쪽 땅 끝에 있는 아주 높고 추운 산입니다, 지금은 소수의 부족만이 살고 있으며 전설에 의하면 설산 너머에는 잊혀진 대륙이 있다고 합니다.",
    },
    {
      src: "./assets/back2.jpg",
      maintext: "황금 숲",
      text: "단풍나무가 울창한 숲입니다, 가끔 진짜 황금으로된 단풍이 발견된다는 소문이있습니다. 숲속에는 수많은 비밀이 숨겨져 있습니다.",
    },
    {
      src: "./assets/back6.jpg",
      maintext: "성당",
      text: "주신 카르테논을 숭배하기위해 고대부터 존재하던 카르테논 성당. 성당 내부에는 수많은 성인들의 기도가 자리잡고 있습니다.",
    },
  ];

  return (
    <div className="worldview">
      <div className="worldview-blur"></div>
      <div className="worldview-box">
        <motion.div
          animate={animationControls}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
        >
          <div className="worldview-topname">『 세계관 』</div>
        </motion.div>

        <div className="worldview-swiperBox">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectCoverflow,
            ]}
            rewind={true}
            spaceBetween={10}
            slidesPerView={3}
            effect="coverflow"
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 5,
              depth: 30,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {items.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  {({ isNext }) => (
                    <motion.div
                      animate={animationControls}
                      initial={{ opacity: 0, y: 500 }}
                      transition={{ ease: "easeInOut", duration: 0.8 }}
                    >
                      <div>
                        <div
                          className={`worldview-img ${
                            isNext ? "active" : "not active"
                          }`}
                        >
                          <img src={item.src} alt="세계관이미지" />
                        </div>

                        <div className="worldview-maintext">
                          {item.maintext}
                        </div>
                        <div className="worldview-text">{item.text}</div>
                      </div>
                    </motion.div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Worldview;