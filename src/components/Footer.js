import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-div1">
        <li className="Footer-li1">
          <ul>
            <a href="/">회사소개</a>
          </ul>
          <ul>
            <a href="/">이용약관</a>
          </ul>
          <ul>
            <a href="/">개인정보처리방침</a>
          </ul>
          <ul>
            <a href="/">게임이용등급안내</a>
          </ul>
          <ul>
            <a href="/">운영정책</a>
          </ul>
          <ul>
            <a href="/">청소년보호정책</a>
          </ul>
          <ul>
            <a href="/">고객센터</a>
          </ul>
        </li>
      </div>
      <div className="Footer-div2">
        <li className="Footer-li2">
          <ul>㈜펄어비스</ul>
          <ul>대표이사: 허진영</ul>
          <ul>경기도 과천시 과천대로2길 48 (갈현동, 펄어비스 홈 원)</ul>
        </li>
        <li className="Footer-li2">
          <ul>사업자등록번호 : 138-81-62479</ul>
          <ul>통신판매업 신고번호 : 2022-경기과천-0177</ul>
          <ul>
            <a href="/">사업자 정보 확인</a>
          </ul>
        </li>
        <li className="Footer-li2">
          <ul>대표번호: 1661-8572</ul>
          <ul>FAX : 031-935-0837</ul>
          <ul>E-mail : pc_kr@playblackdesert.com</ul>
        </li>
      </div>
      <div className="Footer-img">
        <img src="./assets/pearlabyssWhite.png" alt="펄어비스로고"></img>
        <img src="./assets/logo2.png" alt="붉은사막로고"></img>
      </div>
    </div>
  );
}

export default Footer;
