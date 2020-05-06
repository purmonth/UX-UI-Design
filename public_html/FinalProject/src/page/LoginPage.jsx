import React from "react"
import Header from "../container/Header.jsx"
import "../css/LogInPage.css"
class LoginPage extends React.Component {
    render() {
        return (
            <div id="LoginPage" className="hidden">
                <Header />
                <div className="container" id="container_LogIn">
                    <div className="container_left">
                        <div className="left_title">還沒有帳號嗎？</div>
                        <div className="left_info">立即註冊加入Lazebra，<br />開始新的線上購物體驗吧！</div>
                        <div className="button cursor" id="SignUp">Sign up</div>
                    </div>
                </div>
                <div className="slider">
                    <div id="slider_close" className="slider_close cursor"><a href="HomePage.html"></a></div>
                    <div className="slider_title">Log in</div>
                    <div className="slider_container">
                        <div className="slider_content">歡迎回來！</div>
                        <div className="slider_FBbutton cursor"></div>
                        <p>或</p>
                        <div className="slider_input">
                            <form action="#" method="get" id="ajax-form">
                                <input type="text" id="email" name="email" placeholder="信箱或電話號碼"></input>
                                <input type="text" id="password" name="password" placeholder="密碼"></input>
                            </form>
                        </div>
                        <div className="slider_button cursor">Log in</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;