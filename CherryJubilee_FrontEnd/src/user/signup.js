import React, { Component } from 'react';
import { Link } from "react-router-dom";

class signup extends Component {
    constructor(props){
        super(props)
        this.state = {
          id: '',
          password: '',
          checkPassword: '',
          name: '',
          workPlace: '',
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
        else if(this.state.checkPassword==='') {
            alert("PASSWORD 확인을 입력해주세요.")
        }
        else if(this.state.name==='') {
            alert("이름을 입력해주세요.")
        }
        else if(this.state.workPlace==='') {
            alert("근무지를 입력해주세요.")
        }
        else if(this.state.password!==this.state.checkPassword) {
            alert("비밀번호 확인이 다릅니다.")
        }
        else {
            alert("가입완료 되었습니다.")
        }
        
    }
    render() {
        return (
            <div className="App">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                
                <Link to='/login'>
                    <img alt="#" src={require("../logo.png")} width="250" height="50"/>
                </Link>
                
                <br/><br/>
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
                        type="password"
                        name="password"
                        className="text"
                        placeholder="PASSWORD"
                        value = {this.state.password}
                        onChange = {this.handlingChange}
                    />
                    <br></br>
                    <input
                        type="password"
                        name="checkPassword"
                        className="text"
                        placeholder="PASSWORD 확인"
                        value = {this.state.checkPassword}
                        onChange = {this.handlingChange}
                    />
                    <br></br>
                    <input
                        name="name"
                        className="text"
                        placeholder="이름"
                        value = {this.state.name}
                        onChange = {this.handlingChange}
                    />
                    <br></br>
                    <input
                        name="workPlace"
                        className="text"
                        placeholder="근무지"
                        value = {this.state.workPlace}
                        onChange = {this.handlingChange}
                    />
                </label>
                <br></br>
                <br></br>
                <input className="signupbutton" type="submit" value="가입완료" />
                </form>
    </div>

        );
    }
}

export default signup;