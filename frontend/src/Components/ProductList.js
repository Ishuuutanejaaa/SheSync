import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));

    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(savedCart);
  }, []);

  const updateCart = (product, quantity) => {
    if (quantity <= 0) {
      const updatedCart = { ...cart };
      delete updatedCart[product.id];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = { ...cart, [product.id]: { ...product, quantity } };
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const increaseQuantity = (product) => {
    const newQuantity = (cart[product.id]?.quantity || 0) + 1;
    updateCart(product, newQuantity);
  };

  const decreaseQuantity = (product) => {
    const newQuantity = (cart[product.id]?.quantity || 1) - 1;
    updateCart(product, newQuantity);
  };

const updateQuantity = (productId, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + amount), // Prevent quantity from going below 1
    }));
  };
  
  const addToCart = (product) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || {};
  
    if (typeof existingCart !== "object") {
      console.error("Cart data is corrupted. Resetting cart.");
      existingCart = {};
    }
  
    const quantity = quantities[product.id] || 1;
    existingCart[product.id] = { ...product, quantity: (existingCart[product.id]?.quantity || 0) + quantity };
  
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);
  
    alert(`${product.name} (x${quantity}) added to cart!`);
  };
  
  

//   const buyNow = (product) => {
//     let existingCart = JSON.parse(localStorage.getItem("cart")) || []; // Ensure it's an array
  
//     if (!Array.isArray(existingCart)) {
//       console.error("Cart data is corrupted. Resetting cart.");
//       existingCart = []; // Reset cart if corrupted
//     }
  
//     const quantity = quantities[product.id] || 1; // Get quantity or default to 1
//     const updatedCart = [...existingCart, { ...product, quantity }];
  
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCart(updatedCart);
  
//     navigate("/cart"); // Redirect to cart page
//   };
const buyNow = (product) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || {};
  
    if (typeof existingCart !== "object") {
      console.error("Cart data is corrupted. Resetting cart.");
      existingCart = {};
    }
  
    const quantity = quantities[product.id] || 1;
    existingCart[product.id] = { ...product, quantity: (existingCart[product.id]?.quantity || 0) + quantity };
  
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);
  
    navigate("/cart"); // Redirect to cart page
  };
  
  
  
  
  

  return (
    <div>
      <h2>All Products</h2>
      <div className="product-container">
        {products.map((product) => (
        <div key={product.id} className="product-card">
  <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px" }} />
  <h3>{product.name}</h3>
  <p>{product.description}</p>
  <p><strong>Price:</strong> ${product.price}</p>
  
  {/* Quantity Selector */}
  <div>
    <button onClick={() => updateQuantity(product.id, -1)}>-</button>
    <span>{quantities[product.id] || 1}</span>
    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
  </div>

  <button onClick={() => addToCart(product)}>Add to Cart</button>
  <button onClick={() => buyNow(product)}>Buy Now</button>
</div>

        ))}
      </div>
    </div>
  );
};

export default ProductList;