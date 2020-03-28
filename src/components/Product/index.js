import React from "react";
import product from "../../data/Product.json";

import { Container } from "./styles";

export default function Product(restId) {
  console.log("restId", restId);
  // let products = [];
  // product.map(prod => {
  //   if (prod.place.objectId === restId) {
  //     console.log("if prod", prod);

  //     products.push(<li key={prod.objectId}>{prod.name}</li>);
  //     // return <li key={prod.objectId}>{prod.name}</li>;
  //   }
  // });
  return (
    <ul>
      {product.map(prod => {
        if (prod.place.objectId === restId) {
          console.log("if prod", prod);

          // products.push(<li key={prod.objectId}>{prod.name}</li>);
          return <li key={prod.objectId}>{prod.name}</li>;
        }
      })}
    </ul>
  );
}
