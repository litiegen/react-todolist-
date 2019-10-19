import React, { Component } from 'react'
import Todoing from './Todoing'
import '../aka.css'

export default class Todotitle extends Component {
    render() {
        return (<div className="doing">
            <Todoing title="正在进行" mlml={this.props.del} status="working"/> 
            <Todoing title="已经完成" mlml={this.props.del} status="finished"/>
        </div>)
    }
}