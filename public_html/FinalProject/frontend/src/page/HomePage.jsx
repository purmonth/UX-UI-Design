import React from "react"
import Header from '../container/Header.jsx'
import Footer from '../container/Footer.jsx' 
import "../css/General.css"
import "../css/HomePage.css"
import Img_landmark from "../component/img/landmark.svg"
import Img_circle from "../component/img/circle.svg"
import Img_delivery_icon from "../component/img/delivery_icon.svg"
import Img_back_to_top from "../component/img/back_to_top.svg"

class Searchbar extends React.Component{
    render(){
        return(
            <div className="searchbar">
                <div className="bar_input"><img src={Img_landmark}></img>
                    <form action=" "><input type="text" name="place" placeholder="Enter delivery address"></input></form>
                </div>
                <div className="bar_button cursor">Search</div>
            </div>
        )
    }
}

class BackToTop extends React.Component{
    render(){
        return(
            <div>
                <button type="button" id="BackToTop" className="cursor">
                    <img src={Img_back_to_top}></img>
                    Back to top
                </button>
            </div>
        )
    }
}

class HomePage extends React.Component{
    render(){
        return(
        <div id="HomePage" >
            <Header />
            <div className="container">
                <div id="Home_container_title">Lazebra，你的日常購物小幫手</div>
                <Searchbar />
            </div>
            <div className="page1">
                <div className="page1_icon"><img src={Img_circle}></img></div>
                <div className="page1_title">Lazebra 起源</div>
                <p>因應疫情發展，越來越多人配合防疫，減少出門購物消費的習慣，轉而進行線上消費，<br />除了宅配取貨、門市取貨外，我們希望能建構新的線上購物模式，藉由鄰居或附近住戶出門採買時幫忙代購，<br />以搭便車的購物方式，使居家購物模式更加便利</p>
            </div>
            <div className="page2">
                <div className="page2_container">
                    <div className="page2_title">多種取貨方式</div>
                    <div className="page2_list">
                        <ul>
                            <li>宅配到家</li>
                            <li>超商面交</li>
                            <li>鄰居代收</li>
                        </ul>
                    </div>
                    <div className="page2_icon">
                        <img src={Img_delivery_icon}></img>
                        <img src={Img_delivery_icon}></img>
                        <img src={Img_delivery_icon}></img>
                    </div>
                </div>
            </div>
            <div className="page3">
                <div className="page3_title">如何訂購您想要的日常生活用品?</div>
                <div className="page3_list">
                    <ol>
                        <li>輸入您的地址</li>
                        <li>按下搜尋按鈕</li>
                        <li>查詢是否有代購者訂單</li>
                        <li>選擇訂購商品</li>
                        <li>等待代購者確認</li>
                    </ol>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </div>
        )
    }
}

export default HomePage;