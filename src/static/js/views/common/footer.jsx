import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Footer',
      currentYear: new Date().getFullYear()
    };
  }
  render() {
    console.log(name, this.props);
    return (<footer className="app-footer">
      <div className="container">
      <p><a title="GitHub" target="_blank" href="https://github.com/lvchunai">GitHub</a></p>
      <p>{this.state.currentYear}&nbsp;&copy;&nbsp;<a title="电子邮件" href="#/contact">我的邮件</a>&nbsp;|&nbsp;</p>
      </div>
    </footer>);
  }
}

export default Footer;