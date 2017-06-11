import React from 'react';
import './dashboard.scss';

export default class Dashboard extends React.Component {
    static propTypes = {

    }
    constructor () {
      super();
    }

  render () {
    return (
       <div className="dashboard">
        {this.props.children}
      </div>
    );
  }
}
