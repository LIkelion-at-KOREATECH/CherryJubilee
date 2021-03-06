import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import '../api'
import api from '../api';

class mainpage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            date: '',
            startTime: '',
            endTime: '',
            author: 'admin',
            results: [],
        }
    }

    componentDidMount() {
        this.getWorks()
    }

    async getWorks() {
        const _results = await api.getwork()
        this.setState({results: _results.data})
        console.log(_results.data)
    }

    handlingChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handlingDelete = async (event) => {
        await api.deleteWork(event.target.value) //찰나의 순간..이라도 await 해줘야됨
        this.getWorks() //포스트 Refresh
    }

    handlingSubmit = async (event) => {
        event.preventDefault() //event 기능 -> 막는다 새로고침
        if(this.state.date==='') {
            alert("날짜를 입력해주세요.")
        }
        else if(this.state.startTime==='') {
            alert("시작시간을 입력해주세요.")
        }
        else if(this.state.endTime==='') {
            alert("종료시간을 입력해주세요.")
        }
        else {
            alert("입력 되었습니다.")
            api.createWork({date:this.state.date, startTime:this.state.startTime, endTime:this.state.endTime})
            // api.createWork({date: this.state.date, startTime: this.state.startTime, endTime: this.state.endTime})
            this.setState({date:'', startTime:'', endTime:''}) //창 초기화
        }
    }

    handlingReset = () => {
        this.setState({date:'', startTime:'', endTime:''}) //창 초기화
    }
    render() {
        const thcolor = {
            color: 'white',
            backgroundColor: 'rgba(164,0,0)',
        }
            
        const thlistcolor = {
            backgroundColor: 'rgba(237,237,237)',
        }
        
        

        const getWorkData = this.state.results.map((workdata)=>
            // this.state = {
            //     end_ymd : workdata.startTime,
            //     hh : end_ymd.substr(0,2),
            //     mm : end_ymd.substr(3,2),
            // }
            
            <tr>
            <td width='80rem' height='30rem' style={thlistcolor}>{workdata.date}</td>
            <td width='40rem' height='30rem' style={thlistcolor}>{workdata.day}</td>
            <td width='70rem' height='30rem' style={thlistcolor}>{workdata.startTime}</td>
            <td width='70rem' height='30rem' style={thlistcolor}>{workdata.endTime}</td>
            <td width='70rem' height='30rem' style={thlistcolor}>{workdata.hour}:{workdata.minute}</td>
            <td width='50rem' height='30rem' style={thlistcolor}>{workdata.salary}</td>
            <td width='40rem' height='30rem' >
                <button
                    className="delbutton"
                    onClick={this.handlingDelete}
                    value={workdata.id}
                >
                    Del
                </button>
            </td>
            </tr>
        )
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
            <div className="navigation">
                <div className="container_left">
                    <div className="logo">
                        <img alt="#" src={require("../logo.png")} width="250" height="50"/>
                    </div>
                </div>
                <div className="container_right">
                <div className="login">
                    <br/>
                    <Link to="/login">
                        <hi style={maincolor}> 로그인 </hi>
                    </Link>
                </div>
            </div>
        </div>
      
        <div className="container">
            <div className="container_left">
            <h3 style={maincolor}> 근무 리스트 </h3>
                <ColoredLine color="rgba(164,0,0)" />
                <div className="listContainer">
                    <table className="table" align = 'center'>
                    <tr>
                        <td width='80rem' style={thcolor}>날짜</td>
                        <td width='40rem' style={thcolor}>요일</td>
                        <td width='70rem' style={thcolor}>시작시간</td>
                        <td width='70rem' style={thcolor}>종료시간</td>
                        <td width='70rem' style={thcolor}>총 시간</td>
                        <td width='50rem' style={thcolor}>금액</td>
                        <td width='40rem' ></td>
                    </tr>
                    
                    {getWorkData}

                    {/* <tr>
                        <td width='80rem' height='30rem' style={thlistcolor}>19.01.01</td>
                        <td width='40rem' height='30rem' style={thlistcolor}>화</td>
                        <td width='70rem' height='30rem' style={thlistcolor}>09:00</td>
                        <td width='70rem' height='30rem' style={thlistcolor}>20:00</td>
                        <td width='70rem' height='30rem' style={thlistcolor}>11:00</td>
                        <td width='50rem' height='30rem' style={thlistcolor}>83,500</td>
                        <td width='40rem' height='30rem' >
                            <button className="delbutton">Del</button>
                        </td>
                    </tr> */}
                    </table>
                </div>
            </div>

            <div className="container_right">
                <h3 style={maincolor}> 근무 정보 </h3>
                <ColoredLine color="rgba(164,0,0)" />
                <h4 align='center'> 근무지 정보 : 베스킨라빈스</h4>
                <h4 align='center'> 이번 달 금액은 <b>35,000</b>입니다.</h4>

                <h3 style={maincolor}> 근무 시간 입력 </h3>
                <ColoredLine color="rgba(164,0,0)" />

                    <form align="center" onSubmit={this.handlingSubmit}>
                        <input
                            name='date'
                            className='textbox'
                            placeholder="2019-12-28"
                            value = {this.state.date}
                            onChange = {this.handlingChange}
                        />
                        <input
                            name='startTime' 
                            className='textbox'
                            placeholder="15:00"
                            value = {this.state.startTime}
                            onChange = {this.handlingChange}
                        />
                        ~
                        <input
                            name='endTime' 
                            className='textbox'
                            placeholder="18:00"
                            value = {this.state.endTime}
                            onChange = {this.handlingChange}
                        />
                        <div align='right'>
                            <input
                                type='submit'
                                value="입력"
                                className='inputButton'
                            />
                        </div>
                    </form>
                    <div align='right'>
                        <button className='resetButton' onClick={this.handlingReset}>리셋</button>
                    </div>
                    
                
                <br/>
                <h3 style={maincolor}> 지난 근무 </h3>
                <ColoredLine color="rgba(164,0,0)" />
                <table className="table" align = 'center'>
                <tr>
                    <td width="100rem" style={thcolor}>주차</td>
                    <td width="170rem" style={thcolor}>총 시간</td>
                    <td width="160rem" style={thcolor}>금액</td>
                </tr>
                </table>
            </div>

        </div>
    </div>
        );
    }
}

export default mainpage;