import React from "react";

import "./App.css";
import ProductList from "./components/ProductList";
import { useCreateProductMutation } from "./generated/graphql";

function App() {
  const [createProduct, { data }] = useCreateProductMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = parseInt(e.target.price.value);

    createProduct({ variables: { product: { name, price } } });
  };

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <input type="number" name="price" />
        <button type="submit">submit</button>
      </form>
      <ProductList />
      <p>{data && JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
