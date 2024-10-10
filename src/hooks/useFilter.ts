import { useEffect, useState } from "react";

export const useFilter = (
  [...data], 
  searchQuery:string, 
  setCurrentPage:React.Dispatch<React.SetStateAction<number>>
) => {
  const [filteredProducts, setFilteredProducts] = useState(data)

  function filterData() {
    const result = data.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(result);
    setCurrentPage(1)
  };

  useEffect(() => {
    filterData();
  }, [...data, searchQuery]);

  return filteredProducts;
};
