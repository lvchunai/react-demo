import React from 'react';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
      </tr>
    );
  }
}

export default ProductItem;