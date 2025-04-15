// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ProductList.css";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState({});
//   const [quantities, setQuantities] = useState({});

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5001/api/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));

//     const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
//     setCart(savedCart);
//   }, []);

//   const updateCart = (product, quantity) => {
//     if (quantity <= 0) {
//       const updatedCart = { ...cart };
//       delete updatedCart[product.id];
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = { ...cart, [product.id]: { ...product, quantity } };
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

//   const increaseQuantity = (product) => {
//     const newQuantity = (cart[product.id]?.quantity || 0) + 1;
//     updateCart(product, newQuantity);
//   };

//   const decreaseQuantity = (product) => {
//     const newQuantity = (cart[product.id]?.quantity || 1) - 1;
//     updateCart(product, newQuantity);
//   };

// const updateQuantity = (productId, amount) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [productId]: Math.max(1, (prev[productId] || 1) + amount), // Prevent quantity from going below 1
//     }));
//   };
  
//   const addToCart = (product) => {
//     let existingCart = JSON.parse(localStorage.getItem("cart")) || {};
  
//     if (typeof existingCart !== "object") {
//       console.error("Cart data is corrupted. Resetting cart.");
//       existingCart = {};
//     }
  
//     const quantity = quantities[product.id] || 1;
//     existingCart[product.id] = { ...product, quantity: (existingCart[product.id]?.quantity || 0) + quantity };
  
//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     setCart(existingCart);
  
//     alert(`${product.name} (x${quantity}) added to cart!`);
//   };
  
// const buyNow = (product) => {
//     let existingCart = JSON.parse(localStorage.getItem("cart")) || {};
  
//     if (typeof existingCart !== "object") {
//       console.error("Cart data is corrupted. Resetting cart.");
//       existingCart = {};
//     }
  
//     const quantity = quantities[product.id] || 1;
//     existingCart[product.id] = { ...product, quantity: (existingCart[product.id]?.quantity || 0) + quantity };
  
//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     setCart(existingCart);
  
//     navigate("/cart"); // Redirect to cart page
//   };
  
  
  
  
  

//   return (
//     <div>
//       <h2>All Products</h2>
//       <div className="product-container">
//         {products.map((product) => (
//         <div key={product.id} className="product-card">
//   <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px" }} />
//   <h3>{product.name}</h3>
//   <p>{product.description}</p>
//   <p><strong>Price:</strong> ${product.price}</p>
  
//   {/* Quantity Selector */}
//   <div>
//     <button onClick={() => updateQuantity(product.id, -1)}>-</button>
//     <span>{quantities[product.id] || 1}</span>
//     <button onClick={() => updateQuantity(product.id, 1)}>+</button>
//   </div>

//   <button onClick={() => addToCart(product)}>Add to Cart</button>
//   <button onClick={() => buyNow(product)}>Buy Now</button>
// </div>

//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;



///////new

/*

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
      [productId]: Math.max(1, (prev[productId] || 1) + amount),
    }));
  };

  const addToCart = (product) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || {};

    if (typeof existingCart !== "object") {
      console.error("Cart data is corrupted. Resetting cart.");
      existingCart = {};
    }

    const quantity = quantities[product.id] || 1;
    existingCart[product.id] = {
      ...product,
      quantity: (existingCart[product.id]?.quantity || 0) + quantity,
    };

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);

    alert(`${product.name} (x${quantity}) added to cart!`);
  };

  const buyNow = (product) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || {};

    if (typeof existingCart !== "object") {
      console.error("Cart data is corrupted. Resetting cart.");
      existingCart = {};
    }

    const quantity = quantities[product.id] || 1;
    existingCart[product.id] = {
      ...product,
      quantity: (existingCart[product.id]?.quantity || 0) + quantity,
    };

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);

    navigate("/cart");
  };

  const getTotalCartCount = () =>
    Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <div className="header">
        <h2>All Products</h2>
        <button className="cart-button" onClick={() => navigate("/cart")}>
          🛒 Cart ({getTotalCartCount()})
        </button>
      </div>

      <div className="product-container">
        {products.map((product) => {
          const images = product.images || [product.image]; // Array of images
          const currentImage = images[imageIndexes[product.id] || 0];

          return (
            <div key={product.id} className="product-card">
              <img
                src={currentImage}
                alt={product.name}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>

              <div>
                <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                <span>{quantities[product.id] || 1}</span>
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
              </div>

              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => buyNow(product)}>Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
*/



/*
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});
  const [imageIndexes, setImageIndexes] = useState({});
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch products
    fetch("http://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const initialIndexes = {};
        data.forEach(product => {
          initialIndexes[product.id] = 0;
        });
        setImageIndexes(initialIndexes);
      })
      .catch((error) => console.error("Error fetching products:", error));

    // Fetch cart from backend
    fetch("http://localhost:5001/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const cartObj = {};
        data.forEach((item) => {
          cartObj[item.product.id] = {
            ...item.product,
            quantity: item.quantity,
          };
        });
        setCart(cartObj);
      })
      .catch((err) => console.error("Error fetching cart:", err));
  }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes(prevIndexes => {
        const updated = {};
        products.forEach(product => {
          const images = product.images || [product.image];
          updated[product.id] = (prevIndexes[product.id] + 1) % images.length;
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  const updateQuantity = (productId, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + amount),
    }));
  };

  const addToCart = async (product) => {
    const quantity = quantities[product.id] || 1;
    try {
      const response = await fetch("http://localhost:5001/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: product.id, quantity }),
      });

      if (!response.ok) throw new Error("Failed to add to cart");

      const updatedCartItem = await response.json();

      setCart((prev) => ({
        ...prev,
        [updatedCartItem.product.id]: {
          ...updatedCartItem.product,
          quantity: updatedCartItem.quantity,
        },
      }));

      alert(`${product.name} (x${quantity}) added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const buyNow = async (product) => {
    await addToCart(product);
    navigate("/cart");
  };

  const getTotalCartCount = () =>
    Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <div className="header">
        <h2>All Products</h2>
        <button className="cart-button" onClick={() => navigate("/cart")}>
          🛒 Cart ({getTotalCartCount()})
        </button>
      </div>

      <div className="product-container">
        {products.map((product) => {
          const images = product.images || [product.image];
          const currentImage = images[imageIndexes[product.id] || 0];

          return (
            <div key={product.id} className="product-card">
              <img
                src={currentImage}
                alt={product.name}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>

              <div>
                <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                <span>{quantities[product.id] || 1}</span>
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
              </div>

              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => buyNow(product)}>Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
*/



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});
  const [imageIndexes, setImageIndexes] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const initialIndexes = {};
        data.forEach((product) => {
          initialIndexes[product.id] = 0;
        });
        setImageIndexes(initialIndexes);
      })
      .catch((error) => console.error("Error fetching products:", error));

    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(savedCart);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) => {
        const updated = {};
        products.forEach((product) => {
          const images = product.images || [product.image]; // fallback to single image
          updated[product.id] = (prevIndexes[product.id] + 1) % images.length;
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  const updateQuantity = (productId, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + amount),
    }));
  };

  const addToCart = (product) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || {};

    if (typeof existingCart !== "object") {
      console.error("Cart data is corrupted. Resetting cart.");
      existingCart = {};
    }

    const quantity = quantities[product.id] || 1;
    const currentQuantity = existingCart[product.id]?.quantity || 0;
    existingCart[product.id] = {
      ...product,
      quantity: currentQuantity + quantity,
    };

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);

    alert(`${product.name} (x${quantity}) added to cart!`);
  };

  const buyNow = (product) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || {};

    if (typeof existingCart !== "object") {
      console.error("Cart data is corrupted. Resetting cart.");
      existingCart = {};
    }

    const quantity = quantities[product.id] || 1;
    const currentQuantity = existingCart[product.id]?.quantity || 0;
    existingCart[product.id] = {
      ...product,
      quantity: currentQuantity + quantity,
    };

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCart(existingCart);

    navigate("/cart");
  };

  const getTotalCartCount = () =>
    Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <div className="header">
        <h2>All Products</h2>
        <button className="cart-button" onClick={() => navigate("/cart")}>
          🛒 Cart ({getTotalCartCount()})
        </button>
      </div>

      <div className="product-container">
        {products.map((product) => {
          const images = product.images || [product.image]; // Array of images
          const currentImage = images[imageIndexes[product.id] || 0];

          return (
            <div key={product.id} className="product-card">
              <img
                src={currentImage}
                alt={product.name}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>

              <div>
                <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                <span>{quantities[product.id] || 1}</span>
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
              </div>

              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => buyNow(product)}>Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;