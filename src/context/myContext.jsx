import {createContext} from 'react';

const myContext = createContext();
export default myContext;
// import React, { createContext, useState, useEffect } from 'react';

// const myContext = createContext();

// // eslint-disable-next-line react/prop-types
// const MyContextProvider = ({ children }) => {
//   const [getAllProduct, setGetAllProduct] = useState([]);
//   const [getAllOrder, setGetAllOrder] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const products = await fetchProducts(); // Replace with actual fetch call
//         const orders = await fetchOrders(); // Replace with actual fetch call
        
//         setGetAllProduct(products);
//         setGetAllOrder(orders);

//         console.log('Fetched products:', products); // Debug log
//         console.log('Fetched orders:', orders); // Debug log
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <myContext.Provider value={{ getAllProduct, getAllOrder }}>
//       {children}
//     </myContext.Provider>
//   );
// };

// const fetchProducts = async () => {
//   // Simulate a fetch call to an API endpoint
//   return [
//     { id: 1, title: 'Product 1', price: 100, category: 'Category 1', date: '2024-05-26' },
//     // Add more product data here
//   ];
// };

// const fetchOrders = async () => {
//   // Simulate a fetch call to an API endpoint
//   return [
//     { id: 1, product_id: 1, quantity: 2, date: '2024-05-26' },
//     // Add more order data here
//   ];
// };

// export { myContext, MyContextProvider };
