import React, { Component } from 'react';
import './Cheol.css';
import { Link } from "react-router-dom";

class login extends Component {
    render() {
        return (
            <div className='main'>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <Link to='/'>
                    <img alt="#" src={require("../logo.png")} width="250" height="50"/>
                </Link>

                <br/>
                <br/>
                <form>
                <label>
                    <input type="text" name="ID" className="text" placeholder="ID" />
                    <br></br>
                    <input type="text" name="PASSWORD" className="text" placeholder="PASSWORD" />
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