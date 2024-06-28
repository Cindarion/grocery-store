import { useState, useEffect } from "react";

export const useSlice = ([...data], currentPage, itemsPerPage) => {
  const [slicedProducts, setSlicedProducts] = useState(data)

  function sliceData() {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const result = data.slice(indexOfFirstProduct, indexOfLastProduct);
    setSlicedProducts(result)
  };

  useEffect(() => {
    sliceData()
  }, [...data, currentPage, itemsPerPage])

  return slicedProducts;
};