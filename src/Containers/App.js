import React,{ Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import {robots} from '../Components/robots';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '' 
        }
    }
        /*
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));

    }
        */
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
        
    }

   render(){
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
    } )
    if(this.state.robots.length===0){
        return <h1>Please Wait...</h1>
    }
    else{
    return (
        <div className='tc'> 
         <h1 className='f1'> Money Heist</h1>
         <SearchBox searchChange={this.onSearchChange} />
         <Scroll> 
          <CardList robots={filteredRobots} /> 
         </Scroll>
        </div>
 
     );
    }
   }
}
export default App; 