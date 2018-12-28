import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeStockOnly(e) {
    this.props.handleStockCheck(e);
  }

  handleChangeFilterText(e) {
    this.props.handleFilterText(e);
  }

  render() {
    const { filterText, inStockOnly } = this.props;
    return (
      <article className="search-bar">
        <form>
          <p>
            <input onChange={e => this.handleChangeFilterText(e)} value={filterText} type="text" placeholder="search..." />
          </p>
          <p>
            <label htmlFor="inStockOnly">
              <input onChange={e => this.handleChangeStockOnly(e)} type="checkbox" checked={inStockOnly} id="inStockOnly" />
              Only show products in stock.
            </label>
          </p>
        </form>
      </article>
    );
  }
}

export default SearchBar;