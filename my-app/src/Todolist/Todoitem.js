import React, { Component } from 'react'
import '../aka.css'

export default class Todoitem extends Component {
    check = () => {
        this.props.item.status === 'working' && this.props.check(this.props.item.id)
    }
    del = () => {
        this.props.del(this.props.item.id)
    }
    render() { 
        return (
            <div className={'todoi' + (this.props.item.status === 'finished' ? ' todoif' : '')}>
                <input className="todoinput" type="checkbox" onChange={this.check} 
                checked={this.props.item.status === 'finished'} ></input>
                <p>{this.props.item.text}</p>
                <span className="todospan" onClick={this.del}>删</span> 
            </div>)
    }
}
