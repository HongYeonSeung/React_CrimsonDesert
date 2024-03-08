import React from 'react'

function Topheader() {
  return (
    <div>
        <div className='topheader-box'>
            <div className='topheader-box-left'>
                <div>
                    <img src='./assets/logo2.png' alt='로고'></img>
                </div>
            </div>
            <div className='topheader-box-right'>
                <li className='topheader-li'>
                  <ul><a href='/'>로그인</a></ul>
                  <ul><a href='/'>회원가입</a></ul>
                  <ul><a href='/'>고객지원</a></ul>
                </li>
            </div>
        </div>
    </div>
  )
}

export default Topheader