import React from 'react';

import Sider from './sider';
import Router from '../../routes/routers';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Main'
    };
  }
  render() {
    return <main className="app-main">
      <Sider {...this.props} />
      <Router {...this.props} />
    </main>;
  }
}

export default Main;