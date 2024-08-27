import { useEffect, useState } from "react";

export const useFilter = ([...data], searchQuery: string) => {
  const [filteredProducts, setFilteredProducts] = useState(data)

  function filterData() {
    const result = data.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(result);
  };

  useEffect(() => {
    filterData();
  }, [...data, searchQuery]);

  return filteredProducts;
};
