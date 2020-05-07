import React from "react"

import "../css/Container.css"
class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container_inside" id={this.props.insideID}>
                    <div className="container_title">{this.props.title}</div>
                    <div className="container_info">{this.props.info}</div>
                    <div className="button cursor" id={this.props.buttonID}>{this.props.button}</div>
                </div>
            </div>
        )
    }
}

export default Container;