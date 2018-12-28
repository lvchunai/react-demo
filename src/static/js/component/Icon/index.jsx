import React from 'react';

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<i>{this.props.type}</i>);
  }
}

export default Icon;