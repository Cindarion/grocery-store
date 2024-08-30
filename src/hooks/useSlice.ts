import { useState, useEffect } from "react";

export const useSlice = ([...data], currentPage: number, productsPerPage: number) => {
  const [slicedProducts, setSlicedProducts] = useState(data)

  function sliceData() {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const result = data.slice(indexOfFirstProduct, indexOfLastProduct);
    setSlicedProducts(result)
  };

  useEffect(() => {
    sliceData()
  }, [...data, currentPage, productsPerPage])

  return slicedProducts;
};