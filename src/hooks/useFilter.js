import { useEffect, useState } from "react";

export const useFilter = (data, sortOption) => {
  function sortData() {
    if (sortOption == "Default") {
      console.log(`(useFilter) - Current sort method: "Default"`);
      const sortedProducts = data;
      console.log(`%c (useFilter) - Data, we return: ${sortedProducts}`, 'color:green');
    };
  
    if (sortOption == "A-Z") {
      const sortedArray = data.sort((a, b) => a.title.localeCompare(b.title));
      console.log(`Current sort method: "A-Z"`);
      const sortedProducts = sortedArray;
    };
  
    if (sortOption == "Price") {
      const sortedArray = data.sort((a, b) => a.price.price_per_unit - b.price.price_per_unit);
      console.log(`Current sort method: "Price"`);
      const sortedProducts = sortedArray;
    };
  };

  useEffect(() => {
    sortData()
  }, [sortOption]);
};
