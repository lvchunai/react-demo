import React from 'react';

import SearchBar from './searchBar';
import ProductTable from './productTable';

import '../../../css/fiterableProductTable/filter.less'

import { products } from '../../datas/products';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      productList: products,
    };
  }

  handleFilterText = (e) => {
    console.log(e, e.target);
    this.setState({ filterText: e.target.value });
  }

  handleStockCheck = (e) => {
    console.log(e, e.target);
    this.setState({ inStockOnly: e.target.checked });
  }

  render() {
    const { filterText, inStockOnly, productList } = this.state;
    return <section className="filterable-table">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        handleFilterText={this.handleFilterText}
        handleStockCheck={this.handleStockCheck}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={productList}
      />
    </section>;
  }
}

export default FilterableProductTable;