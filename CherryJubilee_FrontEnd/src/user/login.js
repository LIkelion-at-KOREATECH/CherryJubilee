import React, { Component } from 'react';
import './Cheol.css';
import { Link } from "react-router-dom";

class login extends Component {
    constructor(props){
        super(props)
        this.state = {
          id: '',
          password: '',
        }
    }
    
    

    handlingChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handlingSubmit = async (event) => {
        event.preventDefault() //event 기능 -> 막는다 새로고침
        if(this.state.id==='') {
            alert("ID를 입력해주세요.")
        }
        else if(this.state.password==='') {
            alert("PASSWORD를 입력해주세요.")
        }
        else {
            alert("로그인 되었습니다.")
        }
    }
    render() {
        return (
            <div className='main'>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <Link to='/'>
                    <img alt="#" src={require("../logo.png")} width="250" height="50"/>
                </Link>

                <br/>
                <br/>
                <form onSubmit={this.handlingSubmit}>
                <label>
                    <input
                        name="id"
                        className="text"
                        placeholder="ID"
                        value = {this.state.id}
                        onChange = {this.handlingChange}
                    />
                    <br></br>
                    <input
                        name="password"
                        type="password"
                        className="text"
                        placeholder="PASSWORD"
                        value = {this.state.password}
                        onChange = {this.handlingChange}
                    />
               </label>
                <br></br>
                <br></br>
                <input className="loginbutton" type="submit" value="로그인" />
                <br></br>
                <Link to='/signup'>
                    <h5>회원가입</h5>
                </Link>
                </form>
            </div>
        );
    }
}

export default login;