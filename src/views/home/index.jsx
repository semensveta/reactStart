import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActionCreators from 'actions/todo';
import TestComponent from 'components/test'
import Dashboard from '../../components/dashboard';
import Plan from '../../components/plan';
import Appliance from '../../components/appliance';

// TODO: make the create-todo form a component so that a bound action
// can be provided rather than manually using this.props.dispatch(action)
@connect(state => ({ todos : state.todos }))
export default class HomeView extends React.Component {
  constructor () {
    super();
    this.state = {
      todo : ''
    };
  }

  componentWillMount () {
    this._todoActions = bindActionCreators(
      TodoActionCreators, this.props.dispatch
    );
  }

  _bindTo (prop) {
    return (e) => this.setState({
      [prop] : e.target.value
    });
  }

  _createTodo (e) {
    e.preventDefault();
    this.props.dispatch(TodoActionCreators.createTodo(this.state.todo));
    this.setState({
      todo : ''
    });
  }

  render () {
    const todos = this.props.todos.toJS();
    let appliances = [
        {name:'Robot Vacuum',state: true},
        {name:'Washer',state: true},
        {name:'Dryer',state: true},
        {name:'Refrigirator',state: true},
        {name:'Coffe Mashine',state: true},
        {name:'Owen',state: true},
    ];
    let rooms = [
        {name:'Living Room',state: true},
        {name:'Bedroom',state: true},
        {name:'Kitchen',state: true},
        {name:'Bathroom',state: true},
        {name:'Restroom',state: true},
        {name:'Hall',state: true},
    ];


    return (
      <div>
        <Dashboard>
          <Appliance appliances={appliances} />
          <Appliance appliances={rooms} />
          <Plan />
          <TestComponent />
        </Dashboard>
      </div>
    );
  }
}
