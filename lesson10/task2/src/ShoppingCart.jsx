import React from "react";
import ProductsList from "./ProductsList";
import CartTitle from "./CartTitle";
import cartItems from "./cartItems.js";

export default class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(cartItems);
  // }
  state = { cartItems: cartItems };

  render() {
    return (
      <div className="column">
        <CartTitle
          userName={this.props.name}
          count={this.state.cartItems.length}
        />

        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
