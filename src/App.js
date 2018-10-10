import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import './App.css';

class App extends Component {
  constructor(props) {
    var id = 0;
    super(props);
    this.state = {
      item: [],
      data: ['Learn Reactjs', 'Learn Angular.js']
    }
  }

  update = (e) => {
    this.setState({item: e.target.value})
  }

  add=()=> {
    if (this.state.item !== '') {
        this.state.data.push(this.state.item);
        this.setState({ data: this.state.data });
        
    }
    else {
      alert("Write something in the input field!")
    }
  }
 
  render() {
    return (
     <div>
       <h1 className="header">Todo App</h1>
       <WriteText qwerty={this.update} add={this.add} data={this.state.data}/>
       <List item={this.state.data}/>
     </div>
    );
  }
}


class WriteText extends Component{

  render(){
    return(
      <div>
        <input className="boxtext" value = {this.props.item} type="text" onChange={this.props.qwerty} placeholder="Todo..."/>
        <input className="btn" type="button" onClick={this.props.add} value="add"/>
      </div>
    );
  }
}

export default App;
