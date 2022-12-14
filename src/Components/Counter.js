import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.person = {
            FullName : "Yasmine Ellouze",
            Age : 25,
            Profession : "Developer Full Stack",
            img : "https://academos.qc.ca/wp-content/uploads/fly-images/29790/banniere-blogue-29-1037x9999.png",
        };
        this.state = {count : 0}
        
    }
    componentDidMount(){
      setInterval(() => {this.setState(prevsState => ({
      count : prevsState.count +1/2
    }))
    }, 1000);
}

  render() {
    return (
      <div>
       <h2>{this.person.FullName}</h2>
       <h2>{this.person.Age}</h2>
       <h2>{this.person.Profession}</h2>
       <h1>{this.state.count}</h1>
       <img src={this.person.img} alt="pic" />


      </div>
    )
  }
}
