import { useEffect, useState } from "react";

export const useSort = ([...data], sortOption) => {
  const [sortedProducts, setSortedProducts] = useState(data);

  function sortData() {
    if (sortOption === "Default") {
      const result = data
      setSortedProducts(result);
      console.log(`(useFilter) - Current sort method: "Default"`, sortedProducts);
    };
  
    if (sortOption === "A-Z") {
      const result = data.sort((a, b) => a.title.localeCompare(b.title));
      setSortedProducts(result);
      console.log(`Current sort method: "A-Z"`, sortedProducts);
    };
  
    if (sortOption === "Price") {
      const result = data.sort((a, b) => a.price.price_per_unit - b.price.price_per_unit);
      setSortedProducts(result);
      console.log(`Current sort method: "Price"`, sortedProducts);
    };
  }; 

  useEffect(() => {
    sortData()
  }, [...data, sortOption])

  return sortedProducts;
};
