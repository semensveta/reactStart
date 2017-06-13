import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActionCreators from 'actions/list';
import TestComponent from 'components/test'
import Dashboard from '../../components/dashboard';
import Plan from '../../components/plan';
import Appliance from '../../components/appliance';

// TODO: make the create-list form a component so that a bound action
// can be provided rather than manually using this.props.dispatch(action)
export default class HomeView extends React.Component {
  constructor () {
    super();
    this.state = {
      todo : ''
    };
  }

  componentWillMount () {

  }


  render () {
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
