import React, { Component } from 'react'
import Todoitem from './Todoitem'
import '../aka.css'
 
export default class Todoing extends Component {
    render() {
        return (<div>
            <h2 className="doinglist">
                {this.props.title}
                <span className="listnum">{this.props.mlml.list.filter(item => {
                    return item.status === this.props.status}).length}</span>   
            </h2>
            <div>{
                this.props.mlml.list.filter(item =>{
                    return item.status === this.props.status
                }).map(item =>{
                    return <Todoitem item={item} check={this.props.mlml.finish}
                    del={this.props.mlml.delete} />
                    })}
            </div>
        </div>)
    }
}