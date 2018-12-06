import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.title = '小盖盖';
    this.secondTitle = '一个迷糊的前端工程师';
    this.state = {
    };
  }
  render() {
    console.log(name, this.props);
    return <header className="app-header">
      <div className="container">
        <h1>{this.title}<span>{this.secondTitle}</span></h1>
      </div>
    </header>;
  }
}

export default Header;