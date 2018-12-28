import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, placeholder } = this.state;
    return <input type={type || 'text'} placeholder={placeholder || ''} />
  }
}