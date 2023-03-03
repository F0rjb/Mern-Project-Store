import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getallproducts } from "../../JS/actions/productaction";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [priceF, setpriceF] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts(priceF));
  }, [priceF]);

  const products = useSelector((state) => state.prod.products);
  return (
    <>
      <Link to="/add"> Add Product</Link>
      <div>
        {" "}
        <h5>filter Price : {priceF} dt</h5>{" "}
        <input
          type="range"
          value={priceF}
          onChange={(e) => setpriceF(e.target.value)}
          min={0}
          max={100000}
          step={10}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products.map((el) => (
          <ProductCard key={el._id} prd={el} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
