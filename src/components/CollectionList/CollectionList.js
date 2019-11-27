import React from "react";
import Collection from "../Collection-item/Collection-item";
import "./collection-list.scss";
const CollectionList = props => {
  const { items, title } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Collection key={item.id} item={item}></Collection>
          ))}
      </div>
    </div>
  );
};

export default CollectionList;
