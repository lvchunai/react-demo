import React from 'react';

import ProductItem from './productItem';

class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const { title, cateProducts, filterText, inStockOnly } = this.props;
    let products = [];
    const stockProducts = [];
    cateProducts.map((value) => {
      if (value.name.indexOf(filterText) > 0 || (inStockOnly && value.stocked)) {
        products.push(value);
      }
    });
    products = filterText || inStockOnly ? products : cateProducts;
    return [
      <tr className="cate-title"><td>{title}</td></tr>,
      products.map(value => (<ProductItem key={value.name} item={value} />))
    ];
  }
}

export default ProductCategory;