import React from 'react';
import MyButton from './MyButton';
import {Button} from 'reactstrap';


export default class MyStateButtons extends React.Component {
    constructor()
    {
        super();
        this.state={counter: 0};
    }


    increase = (e) => {
        e.persist();
        this.setState(prev => ({counter:prev.counter +
                                 Number.parseInt( e.target.getAttribute("num"))
                             }));
    }


    increaseByOne= () => {
      this.setState(prev => ({counter:prev.counter + 1 }));
    }

    toggleTimer=()=> {
      this.timer ?  this.componentWillUnmount() : this.componentDidMount();
    }

    render() {
        return (
        <>
          <h1>My Buttons</h1>
          <Button color="primary" onClick={this.toggleTimer} >Toggle Timer</Button>
          <MyButton number="1"   onClick={this.increase} />
          <MyButton number="10"  onClick={this.increase} />
          <MyButton number="100" onClick={this.increase} />
          <hr />
          <output >
             {this.state.counter}
          </output>
        </>
        )
    }

    componentDidMount() {
      this.timer = setInterval(this.increaseByOne, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.timer);
      this.timer=null;
    }


}
