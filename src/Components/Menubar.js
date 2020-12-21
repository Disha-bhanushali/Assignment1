import React, { Component } from 'react';


class menubar extends Component {
    handleClick(){
        this.props.history.push('page1');
    }
    handleClick1(){
        this.props.history.push('page2');
    }
    render() {
        

        return (
            <div>
            <h1 className="menubar">MenuBar</h1>
            
            <div className="img">
            <img src="/picture.jpg" alt=""/><br/><br/>
            <button type="button" onClick={()=>this.handleClick()}>Page1</button>
            <br/>
            <br/>
            <button type="button" onClick={()=>this.handleClick1()}>Page2</button>
            <br/>
            <br/>    
            </div>
            </div>
        );
    }
}

export default menubar;
