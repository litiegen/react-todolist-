import React, { Component } from 'react'
import '../aka.css'

export default class Todoinput extends Component {
    handleChange = (e) => {
        if(e.key === "Enter") {
            this.props.handleChange(e.target.value)
            e.target.value = ''
        } 
    }
    render() {
        return (<input className="searchtodo" type="text"
        onKeyPress={this.handleChange} placeholder="添加ToDo" ></input>)
    }
}