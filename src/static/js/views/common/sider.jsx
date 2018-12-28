import React from 'react';
import Icon from '../../component/Icon';
import { menus } from '../../datas/menus';

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  handleClick(e, key) {
    console.log(e, key);
    window.location.hash = key;
  }

  render() {
    return <aside className="app-aside">
      <ul>
        {
          menus.map((menu) => {
            return (
              <li
                key={menu.id}
                onClick={e => this.handleClick(e, menu.id)}
              >
                <Icon type={menu.icon} />
                {menu.title}
              </li>
            );
          })
        }
      </ul>
    </aside>;
  }
}

export default Sider;