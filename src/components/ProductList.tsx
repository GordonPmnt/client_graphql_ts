import React from "react";
import { useProductsQuery } from "../generated/graphql";

const ProductList: React.FC = () => {
  const { loading, error, data } = useProductsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.productList?.map((product) => (
        <div key={product?.id}>
          <p>
            {product?.name}: {product?.size}
          </p>
          <p>{product?.fabricationDate}</p>
        </div>
      ))}
    </>
  );
};

export default ProductList;
