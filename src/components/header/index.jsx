import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  static propTypes = {
  }

  constructor () {
    super();
  }

  render () {
    return (
      <header>
        <span>Jon Doe's house</span>
        <a>Log out</a>
      </header>
    );
  }
}
