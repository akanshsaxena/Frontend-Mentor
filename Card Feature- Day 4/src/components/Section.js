import React from "react"
import Card from "./Card.js"


class Section extends React.Component{
    render(){
        return(
            <div className="card-container">
                <Card className1="middle" id="first" category="Supervisor" desc="Monitors activity to identify project roadblocks" imgSrc=".../images/icon-calculator.svg"/>
                <div className="medium">
                    <Card category="Team Builder" id="second" desc="Scans our talent network to create the optimal team for your project" imgSrc=".../images/icon-calculator.svg"/>
                    <Card category="Karma" id="third" desc="Regularly evaluates our talent to ensure quality" imgSrc=".../images/icon-calculator.svg"/>
                </div>
                <Card className1="middle" id="fourth" category="Calculator" desc="Uses data from past projects to provide better delivery estimates" imgSrc=".../images/icon-calculator.svg"/>
            </div>
        )
    }
}
export default Section

