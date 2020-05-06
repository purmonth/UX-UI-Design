import React from "react"
import Header from "../container/Header.jsx"
import "../css/SignUpPage.css"
class SignupPage extends React.Component {
    render() {
        return (
            <div id="SignupPage" className="hidden">
                <Header />
                <div className="container">
                    <div className="container_right">
                        <div className="right_title">已經有帳號嗎？</div>
                        <div className="right_info">現在就登入Lazebra，<br />開始新的線上購物體驗吧！</div>
                        <div className="button cursor" id="LogIn">Log in</div>
                    </div>
                </div>
                <div className="slider">
                    <div id="slider_close" className="slider_close cursor"></div>
                    <div className="slider_title">Sign up</div>
                    <div className="slider_content">開始註冊！</div>
                    <div className="slider_container">
                        <div className="slider_input">
                            <form action="#" method="get" id="ajax-form">
                                <input type="text" id="name" name="name" placeholder="姓名"></input>
                                <input type="text" id="email" name="email" placeholder="信箱"></input>
                                <input type="text" id="phone" name="phone" placeholder="電話"></input>
                                <input type="text" id="password" name="password" placeholder="密碼"></input>
                            </form>
                        </div>
                        <div className="slider_button cursor">Sign up</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupPage;