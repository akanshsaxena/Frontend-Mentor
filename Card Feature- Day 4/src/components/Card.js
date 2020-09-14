import React, {Component} from "react"
import first from "../images/icon-calculator.svg"
import second from "../images/icon-karma.svg"
import third from "../images/icon-supervisor.svg"
import fourth from "../images/icon-team-builder.svg"

class Card extends Component{
    render(props){
        let imgSrc = this.props.id
        return(
            <div className={`card ${this.props.className1}`} id={this.props.id}>
                <div>
                    <h3 className="bold-text">{this.props.category}</h3>
                    <p className="medium-text">{this.props.desc}</p>
                    <img src={this.props.imgSrc}></img>
                </div>
            </div>
        )
    }
}

export default Card