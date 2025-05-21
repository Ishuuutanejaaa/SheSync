// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ProductList.css";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState({});
//   const [quantities, setQuantities] = useState({});
//   const [imageIndexes, setImageIndexes] = useState({});
//   const [sortOption, setSortOption] = useState("");
//   const navigate = useNavigate();

//   const fetchProducts = (sort) => {
//     let url = "http://localhost:5001/api/products";
//     if (sort) {
//       url += `?sort=${sort}`;
//     }
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         const initialIndexes = {};
//         data.forEach((product) => {
//           initialIndexes[product.id] = 0;
//         });
//         setImageIndexes(initialIndexes);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   };
// //load cart
//   useEffect(() => {
//     fetchProducts(sortOption);

//     const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
//     setCart(savedCart);
//   }, [sortOption]);

//   //for image rot
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndexes((prevIndexes) => {
//         const updated = {};
//         products.forEach((product) => {
//           const images = product.images || [product.image]; // fallback to single image
//           updated[product.id] = (prevIndexes[product.id] + 1) % images.length;
//         });
//         return updated;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [products]);

//   const updateQuantity = (productId, amount) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [productId]: Math.max(1, (prev[productId] || 1) + amount),
//     }));
//   };

//   const addToCart = (product) => {
//     let existingCart = JSON.parse(localStorage.getItem("cart")) || {};

//     if (typeof existingCart !== "object") {
//       console.error("Cart data is corrupted. Resetting cart.");
//       existingCart = {};
//     }

//     const quantity = quantities[product.id] || 1;
//     const currentQuantity = existingCart[product.id]?.quantity || 0;
//     existingCart[product.id] = {
//       ...product,
//       quantity: currentQuantity + quantity,
//     };

//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     setCart(existingCart);

//     alert(`${product.name} (x${quantity}) added to cart!`);
//   };

//   const buyNow = (product) => {
//     let existingCart = JSON.parse(localStorage.getItem("cart")) || {};

//     if (typeof existingCart !== "object") {
//       console.error("Cart data is corrupted. Resetting cart.");
//       existingCart = {};
//     }

//     const quantity = quantities[product.id] || 1;
//     const currentQuantity = existingCart[product.id]?.quantity || 0;
//     existingCart[product.id] = {
//       ...product,
//       quantity: currentQuantity + quantity,
//     };

//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     setCart(existingCart);

//     navigate("/cart");
//   };

//   const getTotalCartCount = () =>
//     Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
// //jsx rendering
//   return (
//     <div>
//       <div className="header">
//         <h2>All Products</h2>
//         <button className="cart-button" onClick={() => navigate("/cart")}>
//           🛒 Cart ({getTotalCartCount()})
//         </button>
//       </div>

//       <div className="sort-container" style={{ marginBottom: "1rem" }}>
//         <label htmlFor="sort-select" style={{ marginRight: "0.5rem" }}>
//           Sort by:
//         </label>
//           <select
//             id="sort-select"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="">-- Select sort option --</option>
//             <option value="price_asc">Price: Low to High</option>
//             <option value="price_desc">Price: High to Low</option>
//             <option value="name_asc">Alphabetically: A to Z</option>
//             <option value="name_desc">Alphabetically: Z to A</option>
//           </select>
//       </div>

//       <div className="product-container">
//         {products.map((product) => {
//           const images = product.images || [product.image]; // Array of images
//           const currentImage = images[imageIndexes[product.id] || 0];

//           return (
//             <div key={product.id} className="product-card">
//               <img
//                 src={currentImage}
//                 alt={product.name}
//                 style={{ width: "200px", height: "200px", objectFit: "cover" }}
//               />
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>
//                 <strong>Price:</strong> ${product.price}
//               </p>

//               <div>
//                 <button onClick={() => updateQuantity(product.id, -1)}>-</button>
//                 <span>{quantities[product.id] || 1}</span>
//                 <button onClick={() => updateQuantity(product.id, 1)}>+</button>
//               </div>

//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//               <button onClick={() => buyNow(product)}>Buy Now</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ProductList.css";
// Ensure navbar styles are included
import Checkout from "./Checkout";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});
  const [imageIndexes, setImageIndexes] = useState({});
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // or whatever token/session you're using
    navigate("/login");
  };

  const fetchProducts = (sort, search) => {
    let url = "http://localhost:5001/api/products";
    const params = [];
    if (sort) {
      params.push(`sort=${sort}`);
    }
    if (search) {
      params.push(`search=${encodeURIComponent(search)}`);
    }
    if (params.length > 0) {
      url += `?${params.join("&")}`;
    }
    fetch(url)
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
  };

  const debouncedFetchProducts = useCallback(
    debounce((sort, search) => {
      fetchProducts(sort, search);
    }, 300),
    []
  );

  useEffect(() => {
    fetchProducts(sortOption, searchQuery);
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(savedCart);
  }, [sortOption]);

  useEffect(() => {
    debouncedFetchProducts(sortOption, searchQuery);
  }, [searchQuery, sortOption, debouncedFetchProducts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) => {
        const updated = {};
        products.forEach((product) => {
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
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/Logo.png" alt="SheSync Logo" className="logo" />
          <span className="app-name">SheSync</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Shopping</Link></li>
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <div className="header">
        <h2>All Products</h2>
        <button className="cart-button" onClick={() => navigate("/cart")}>
          🛒 Cart ({getTotalCartCount()})
        </button>
      </div>

      <div className="filter-bar">
        <div className="sort-container">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">-- Select sort option --</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Alphabetically: A to Z</option>
            <option value="name_desc">Alphabetically: Z to A</option>
          </select>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
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
              <Checkout cartItems={[{ ...product, quantity: quantities[product.id] || 1 }]} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;



// hello
// hello hii