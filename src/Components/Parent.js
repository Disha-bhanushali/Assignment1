import React, { Component } from 'react'
import Child from "./Child"
export class Parent extends Component {
    state={
        child_color:{
            color:"green"
        }
    }
    render() {
        return (
            <div>
                <Child/>
            </div>
        )
    }
}

export default Parent
