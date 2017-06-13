import React from 'react';
import { connect } from 'react-redux';
import './test.scss';
import * as store from '../../stores';
import {
    ADD_ITEM
} from 'constants/list';

@connect(state => ({ list : state.list }))
export default class TestComponent extends React.Component {
    static propTypes = {
      name: React.PropTypes.string
    }
    constructor () {
      super();

      this.state = {
        numbers: store.getState()
      };

      this.eventHandler = this.eventHandler.bind(this);
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
