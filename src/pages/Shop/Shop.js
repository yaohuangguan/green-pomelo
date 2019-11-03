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
  componentDidMount() {
    document.querySelector(".header").classList.add("header-green");
    document.querySelector(".logoText").classList.add("logo-a");
  }
  componentWillUnmount() {
    document.querySelector(".logoText").classList.remove("logo-a");
    document.querySelector(".header").classList.remove("header-green");
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='container'>
        <br />
        <br />
        <br />
        {collections.map(({ id, ...otherProps }) => (
          <Collection key={id} {...otherProps}></Collection>
        ))}
      </div>
    );
  }
}

export default Shop;
