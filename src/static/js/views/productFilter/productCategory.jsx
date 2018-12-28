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
      if (value.name.indexOf(filterText) > 0) {
        products.push(value);
      }
      if (inStockOnly) {
        stockProducts.push(value);
      }
    });
    products = filterText ? products : cateProducts;
    const productsList = inStockOnly ?
      stockProducts.map(value => (<ProductItem key={value.name} item={value} />)) :
      products.map(value => (<ProductItem key={value.name} item={value} />))
    return [
      <tr><td>{title}</td></tr>,
      productsList
    ];
  }
}

export default ProductCategory;