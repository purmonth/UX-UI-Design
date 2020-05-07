import React from "react"
import Header from "../container/Header.jsx"
import Container from "../container/Container.jsx"
import "../css/General.css"
import "../css/Container.css"
import "../css/Slider.css"


class LoginSlider extends React.Component {
    render() {
        return (
            <div className="slider" id="slider_right">
                <div id="slider_close" className="slider_close cursor"></div>
                <div className="slider_title">Log in</div>
                <div className="slider_container">
                    <div className="slider_content" id="Login_slider_content">歡迎回來！</div>
                    <div className="slider_FBbutton cursor"></div>
                    <p>或</p>
                    <div className="slider_input" id="Login_input">
                        <form action="#" method="get" id="ajax-form">
                            <input type="text" id="email" name="email" placeholder="信箱或電話號碼"></input>
                            <input type="text" id="password" name="password" placeholder="密碼"></input>
                        </form>
                    </div>
                    <div className="slider_button cursor">Log in</div>
                </div>
            </div>
        )
    }
}

class LoginPage extends React.Component {
    render() {
        return (
            <div id="LoginPage" className="hidden">
                <Header />
                <Container insideID="container_left" title="還沒有帳號嗎？" info="立即註冊加入Lazebra" buttonID="Signup_container_button" button="Sign up" />
                <LoginSlider />
            </div>
        )
    }
}

export default LoginPage;