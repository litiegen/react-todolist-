import React, { Component } from 'react'
import Todoinput from './Todoinput'
import '../aka.css'

export default class Todotop extends Component {
    render() {
        return (
        <div className="top">
            <div className="toptodo">
                <div className="toplist">ToDoList</div>
                <Todoinput handleChange={this.props.add}/>
            </div>
        </div>)
    }
}