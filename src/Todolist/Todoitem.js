import React, { Component } from 'react'
import '../aka.css'

export default class Todoitem extends Component {
    constructor(){
        super();
        this.state = {
            time:new Date().getMonth()+1+'.'+new Date().getDate()+'/'+new Date().getFullYear()+'事件：'+' '
        }
    }
    componentDidMount(){
        this.timeId = setInterval(()=>{
            this.setState({
                time:new Date().getMonth()+1+'.'+new Date().getDate()+'/'+new Date().getFullYear()+'事件：'+' '
            })
        })
    }
    componentWillMount(){
        clearInterval(this.timeId)
    }
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
                <p><span className="tododate">{this.state.time}</span>{this.props.item.text}</p>
                <span className="todospan" onClick={this.del}>删</span> 
            </div>)
    }
}
