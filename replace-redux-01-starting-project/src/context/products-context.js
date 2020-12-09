import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {}
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  // My Approach
  // const toggleFavorite = (productId) => {
  //   setProductsList((currentProdList) => {
  //     const newProductList = currentProdList.map((prod) => {
  //       if (prod.id === productId) {
  //         prod.isFavorite = !prod.isFavorite;
  //       }
  //       return prod;
  //     });

  //     console.log(currentProdList)
  //     console.log(newProductList)
  //     return [...newProductList];
  //   });
  // };

  const toggleFavorite = (productId) => {
    setProductsList((currentProdList) => {
      console.log(productId, currentProdList);
      const prodIndex = currentProdList.findIndex((p) => p.id === productId);
      console.log(prodIndex);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      console.log(updatedProducts);
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav:toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
