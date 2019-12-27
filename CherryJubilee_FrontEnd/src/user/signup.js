import React, { Component } from 'react';
import { Link } from "react-router-dom";

class signup extends Component {
    render() {
        return (
            <div className="App">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                
                <Link to='/login'>
                    <img alt="#" src={require("../logo.png")} width="250" height="50"/>
                </Link>
                
                <br/><br/>
                <form>
                <label>
                    <input type="text" name="ID" className="text" placeholder="ID" />
                    <br></br>
                    <input type="text" name="PASSWORD" className="text" placeholder="PASSWORD" />
                    <br></br>
                    <input type="text" name="PASSWORD확인" className="text" placeholder="PASSWORD 확인" />
                    <br></br>
                    <input type="text" name="이름" className="text" placeholder="이름" />
                    <br></br>
                    <input type="text" name="근무지" className="text" placeholder="근무지" />
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