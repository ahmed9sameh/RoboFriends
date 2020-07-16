import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           return response.json();

        })
        .then(users => {
        this.setState({robots:users});
    });}
    onSearchChange=(event)=>{
      
        this.setState({searchfield:event.target.value})
       
        
        
    }

    

render(){
    const filteredRobots=this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
         
    })
    return(
        <div className="tc">
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet"></link>
        <h1 className="Header">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
    )
}
}
export default App