import React from 'react';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
  );

  const maincolor = { color: 'rgba(164,0,0)'};
  
  const thcolor = {
    color: 'white',
    backgroundColor: 'rgba(164,0,0)',
  };

  

  return (
    <div className="App">
      <div className="navigation">
        <div className="container_left">
          <div className="logo">
            <img src={require("./logo.png")} width="250" height="50"/>
          </div>
        </div>
        <div className="container_right">
          <div className="login">
            <br/>
            <hi style={maincolor}> 로그인 </hi>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="container_left">
          <h3 style={maincolor}> 근무 리스트 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <table className="table" align = 'center'>
              <tr>
                <td style={thcolor}>날짜</td>
                <td style={thcolor}>요일</td>
                <td style={thcolor}>시작시간</td>
                <td style={thcolor}>종료시간</td>
                <td style={thcolor}>총 시간</td>
                <td style={thcolor}>금액</td>
                <td style={thcolor}>수정</td>
              </tr>
            </table>
        </div>

        <div className="container_right">
            <h3 style={maincolor}> 근무 정보 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <h4 align='center'> 근무지 정보 : 베스킨라빈스</h4>
            <h4 align='center'> 이번 달 금액은 <b>35,000</b>입니다.</h4>

            <h3 style={maincolor}> 근무 시간 입력 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <table align='center'>
              <tr>
                <td><input type='text' className='textbox'></input></td>
                <td><input type='text' className='textbox'></input></td>
                <td>~</td>
                <td><input type='text' className='textbox'></input></td>
              </tr>
            </table>
            <div align='right'>
              <button className='inputButton'>입력</button>
              <button className='resetButton'>리셋</button>
            </div>
            <br/>
            <h3 style={maincolor}> 지난 근무 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <br/>
            <table className="table" align = 'center'>
              <tr>
                <td style={thcolor}>주차</td>
                <td style={thcolor}>총 시간</td>
                <td style={thcolor}>금액</td>
              </tr>
            </table>
          </div>

      </div>
      
        
    </div>
  );
}

export default App;
