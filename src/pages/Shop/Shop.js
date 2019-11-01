import React from "react";
import SHOP_DATA from "./ShopData";
import Collection from "../../components/CollectionPreview/CollectionPreview";
import "./shop.scss";
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='container'>
        {collections.map(({ id, ...otherProps }) => (
          <Collection key={id} {...otherProps}></Collection>
        ))}
      </div>
    );
  }
}

export default Shop;
