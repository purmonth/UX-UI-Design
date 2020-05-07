import React from "react"
import "../css/Header.css"
import Img_login from "../component/img/login.svg"

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header_logo">Lazebra</div>
                <div id="Signin_button"className="header_button cursor"><img src={Img_login} />Sign in</div>
            </div>
        )
    }
}

export default Header;