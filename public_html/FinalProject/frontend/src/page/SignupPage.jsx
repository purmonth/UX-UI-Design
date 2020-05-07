import React from "react"
import Header from "../container/Header.jsx"
import Container from "../container/Container.jsx"
import "../css/General.css"
import "../css/Slider.css"
import "../css/Container.css"

class SignUpSlider extends React.Component {
    render() {
        return (
            <div className="slider" id="slider_left">
                <div id="slider_close" className="slider_close cursor"></div>
                <div className="slider_title">Sign up</div>
                <div className="slider_content" id="SignUp_slider_content">開始註冊！</div>
                <div className="slider_container">
                    <div className="slider_input" id="SignUp_input">
                        <form action="#" method="get" id="ajax-form">
                            <input type="text" id="name" name="name" placeholder="姓名"></input>
                            <input type="text" id="email" name="email" placeholder="信箱"></input>
                            <input type="text" id="phone" name="phone" placeholder="電話"></input>
                            <input type="text" id="password" name="password" placeholder="密碼"></input>
                        </form>
                    </div>
                    <div className="slider_button cursor" id="SignUp_button">Sign up</div>
                </div>
            </div>
        )
    }
}

class SignupPage extends React.Component {
    render() {
        return (
            <div id="SignupPage" className="hidden">
                <Header />
                <Container insideID="container_right" title="已經有帳號嗎？" info="現在就登入Lazebra" buttonID="Login_container_button" button="Log in" />       
                <SignUpSlider />
            </div>
        )
    }
}

export default SignupPage;