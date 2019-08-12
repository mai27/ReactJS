import React, { Component } from "react";

import "./App.css"

class XIR1 extends Component{
    constructor (props){
        super(props); 
        this.state = { state1 : "Hello", state2 : " "};
    }
        salamkan = () => {
            this.setState({state1 : "Salammu Untukku"});
        };
        handleChange = event => {
            this.setState({
            state2 : event. target.value
            });
        };
        render(){
            return (
                <div className="color">
                <input type="text" onChange={this.handleChange}/>
                <br/>
                {this.state.state1}
                {this.props.namaDepan} {this.props.namaBelakang}
                </div>
            );
        }
        
    
}
export default XIR1;