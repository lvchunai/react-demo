import React from 'react';

import Header from './views/common/header';
import Main from './views/common/main';
import Footer from './views/common/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: null
    };
  }

  render() {
    return [
      <Header key="header" {...this.props} />,
      <Main key="main" {...this.props} />,
      <Footer key="footer" {...this.props} />
    ];
  }
}

export default App;