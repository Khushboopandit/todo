import React, { Component } from 'react';

class List extends Component{
    constructor(prop){
      super(prop);
    }
    
    render(){
      return(
        <ul>
          {/* <li className="list" >fgftyfhyj</li> */}
          {/* {this.props.item} */}
          {this.props.item.map((value, i)=>
                <li key={i}>{value}</li>
                 )
               }
        </ul>
      );
    }
  }
  
  
  export default List;
  