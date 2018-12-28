import React from 'react';

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sider'
    };
  }
  render() {
    return <aside className="app-aside">{this.state.name}</aside>;
  }
}

export default Sider;