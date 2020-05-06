import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './page/HomePage.jsx'
import LoginPage from './page/LoginPage.jsx'
import SignUpPage from './page/SignupPage.jsx'

class Root extends React.Component{
    render(){
        return(
            <div>
            <HomePage />
            <LoginPage />
            <SignUpPage />
            </div>
        )
    }
}

ReactDOM.render(
    <Root/>,  
    document.getElementById('app')
);
