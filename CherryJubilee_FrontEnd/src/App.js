import React from 'react';
import './App.css';

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

  return (
    <div className="App">

      <div className="box">
        <div className="logo">
          <img src={require("./logo.png")} width="250" height="50"/>
        </div>
      </div>
      <div className="box">
        <div className="login">
          <hi style={maincolor}> 로그인 </hi>
        </div>
      </div>

      <div className="after-box">
        <div className="box2">
            <h3 style={maincolor}> 근무 리스트 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <table className="table" align = 'center' border="1">
              <tr>
                <td>날짜</td>
                <td>요일</td>
                <td>시작시간</td>
                <td>종료시간</td>
                <td>총 시간</td>
                <td>금액</td>
                <td>수정</td>
              </tr>
            </table>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div className="box2">
            <h3 style={maincolor}> 근무 정보 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <h4 align='center'> 근무지 정보 : 베스킨라빈스</h4>
            <h4 align='center'> 이번 달 금액은 <b>35,000</b>입니다.</h4>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 style={maincolor}> 근무 시간 입력 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <table>
              <tr>
                <td><input type='text'></input></td>
                <td><input type='text'></input></td>
                <td>~</td>
                <td><input type='text'></input></td>
              </tr>
              <tr>
                <button>입력</button>
                <button>초기화</button>
              </tr>
            </table>
            <br/>
            <h3 style={maincolor}> 지난 근무 </h3>
            <ColoredLine color="rgba(164,0,0)" />
            <br/>
            <table className="table" align = 'center' border="1">
              <tr>
                <td>주차</td>
                <td>총 시간</td>
                <td>금액</td>
              </tr>
            </table>
          </div>
      </div>
    </div>
  );
}

export default App;
