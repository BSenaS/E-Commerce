import React from "react";
import { ProductDetails } from "../Layout/productPage/ProductDetails";
import { ProductInfo } from "../Layout/productPage/ProductInfo";
import ProductBestSeller from "../Layout/productPage/ProductBestSeller";
import Clients from "../Components/Clients";

const ProductPage = ({ data }) => {
  return (
    <div>
      <ProductDetails />
      <ProductInfo />
      <ProductBestSeller />
      <Clients />
    </div>
  );
};

export default ProductPage;
