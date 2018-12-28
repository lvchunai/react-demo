import React from 'react';

import ProductCategory from './productCategory';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    // const products = [];
    const cateMap = new Map();
    this.props.products.map((pro) => {
      if (cateMap.has(pro.category)) {
        cateMap.get(pro.category).push(pro);
      } else {
        cateMap.set(pro.category, [pro]);
      }
    });
    const cateRender = [];
    cateMap.forEach((value, key) => {
      return cateRender.push(
        <ProductCategory
          key={key}
          title={key}
          cateProducts={value}
          {...this.props}
        />
      );
    })
    console.log(cateRender);

    return (<table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cateRender}
      </tbody>
    </table>);
  }
}

export default ProductTable;