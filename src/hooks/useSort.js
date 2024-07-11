import { useEffect, useState } from "react";

export const useSort = ([...data], sortOption) => {
  const [sortedProducts, setSortedProducts] = useState(data);

  function sortData() {
    if (sortOption === "Default") {
      const result = data
      setSortedProducts(result);
    };
  
    if (sortOption === "A-Z") {
      const result = data.sort((a, b) => a.title.localeCompare(b.title));
      setSortedProducts(result);
    };
  
    if (sortOption === "Price") {
      const result = data.sort((a, b) => a.price.price_per_unit - b.price.price_per_unit);
      setSortedProducts(result);
    };
  }; 

  useEffect(() => {
    sortData()
  }, [...data, sortOption])

  return sortedProducts;
};
