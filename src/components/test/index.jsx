import React from 'react';
import './test.scss';

export default class TestComponent extends React.Component {
    static propTypes = {
      name: React.PropTypes.string
    }
    constructor () {
      super();
      this.state = {
        numbers: [1, 2, 3, 4, 5, 6]
      };
      // this.eventHandler = this.eventHandler.bind(this);
    }

    numberList () {
      const numbers = this.state.numbers;
      const listItems = numbers.map((number) =>
          <li>{number}</li>
      );
      return (
          <ul>{listItems}</ul>
      );
    }

    eventHandler = () => {
      console.log(this);
      this.setState((prevState) =>
      prevState.numbers.push(
          prevState.numbers[prevState.numbers.length - 1] + 1));
      console.log('HI,event!');
    };

  render () {
    return (
       <div className="test">
        {this.numberList()}
        <button onClick={this.eventHandler}>Add item</button>
      </div>
    );
  }
}
