import React, { Component } from 'react';
import Todotitle from './Todotitle';
import Todotop from './Todotop';

export default class Todolist extends Component {
  constructor() {
    super()
    var aa = JSON.parse(localStorage.getItem('aa'))
    this.state = {
      todo: {
        list:aa, 
        delete: (id) => {
          this.setState(e => {
            let list = e.todo.list.filter(item =>id !== item.id);
            e.todo.list = list;
            localStorage.setItem('aa',JSON.stringify(list));
            
            list=[...this.state.todo.list];
            return {
              list:JSON.parse(localStorage.getItem('aa'))
            }
          })
        },
        finish: (id) => {
          this.setState(e => {
            let list = e.todo.list.map(item => {
              if(item.id === id) {
                item.status = 'finished';
              }
              return item;
            })
            e.todo.list = list;
            let arr = [...this.state.todo.list,id];
            localStorage.setItem('aa',JSON.stringify(arr))
            return {
              list:JSON.parse(localStorage.getItem('aa'))
            }
          })
        }
      }
    }
  }
  add=(item) => {
    this.setState(e => {
      let newTodo = e.todo
      let list = Object.assign(newTodo.list)
      list.push({
        text: item,
        id: new Date().getTime(),
        status: 'working'
      })
      let arr = [...this.state.todo.list,item];
      localStorage.setItem('aa',JSON.stringify(arr))
      newTodo.list = list;
      list=[...this.state.todo.list,item]
      return {
        list:JSON.parse(localStorage.getItem('aa'))
      }
    })
  }
  render(){
    return(<div>
        <Todotop add={this.add}/>
        <Todotitle del={this.state.todo}/>
      </div>)
  }
}