import React, {Component} from "react"

class Header extends Component{
    render(){
        return(
            <div>
                <h1 className="heading light-text">Reliable, efficient delivery</h1>
                <h1 className="heading bold-text">Powered by Technology</h1>
                <p className="medium-text" id="para">Our Artificial Intelligence powered tools use millions of project data pointsto ensure that your project is successful</p>
            </div>
        )
    }
}

export default Header