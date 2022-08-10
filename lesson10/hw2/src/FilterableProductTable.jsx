import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "./products.js";
export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  searchChangeHandler = (event) => {
    this.setState({ filterText: event.target.value });
  };
  checkboxChangeHandler = ({ target }) => {
    this.setState({ inStockOnly: target.checked });
  };
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onChange={this.searchChangeHandler}
          onClick={this.checkboxChangeHandler}
          checked={this.state.inStockOnly}
        />
        <ProductTable
          products={products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
