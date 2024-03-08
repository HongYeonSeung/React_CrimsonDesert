import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

function Newstdata({ Image, body, id }) {
  return (
    <div className="Newstdata-BigBox">
      <div className="Newstdata-SmallBox">
        <div className="Newstdata-Box-img">
          <a href="/">
            <img src={Image} alt="뉴스사진"></img>
          </a>
        </div>
        <div className="Newstdata-Box-text">
          <a href="/">{body}</a>
        </div>
      </div>
    </div>
  );
}

function News() {
  const newsItem = [
    {
      id: 1,
      Image: "./assets/mininew13.jpg",
      body: "붉은사막 신규 심볼 애니메이션 & 신규 트레일러 예고",
    },
    {
      id: 2,
      Image: "./assets/mininew12.jpg",
      body: "붉은사막 개발자 이야기 : 붉은사막에 대해 영상 공개",
    },
    {
      id: 3,
      Image: "./assets/mininew1.jpg",
      body: "붉은사막 게임스컴 ONL 2023 게임플레이 트레일러 공개",
    },
    {
      id: 4,
      Image: "./assets/mininew4.jpg",
      body: "붉은사막 공식 디스코드 오픈 안내",
    },
  ];

  return (
    <div className="News">
      <div className="News-blur"></div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 10 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div className="News-topname">새로운 소식을 만나고 싶다면</div>
      </motion.div>
      <div className="News-Box">
        <div className="News-box-Left">
          <div className="News-box-Left-YouTube">
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeIn",
                duration: 1,
              }}
            >
              <div className="News-box-Left-title">YouTube</div>
              <YouTube
                videoId="GxiHTuzZ6_w"
                opts={{
                  width: "800xp",
                  height: "450px",
                  playerVars: {
                    modestbranding: 1,
                    // loop: 1,
                    // controls: 0,
                    // disablekb: 1,
                    rel: 0,
                  },
                }}
                //   onReady={(e) => {
                //     e.target.mute();
                //   }}
              ></YouTube>
            </motion.div>
          </div>
        </div>
        <div className="News-box-Right">
          <motion.div
            initial={{ opacity: 0, x: 800 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
          >
            <div className="News-box-Right-title">Release notes </div>
            <div className="News-box-Right-box">
              {newsItem.map((el) => (
                <Newstdata
                  key={el.id}
                  Image={el.Image}
                  body={el.body}
                  id={`news-${el.id}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default News;
