import React from "react";

const Checkout = ({ cartItems }) => {
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/payment/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else if (data.id) {
        // Alternative approach (redirect with session ID if only 'id' is sent)
        window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
      } else {
        console.error("Checkout session creation failed", data);
      }
    } catch (error) {
      console.error("Error initiating checkout", error);
    }
  };

  return (
    <button onClick={handleCheckout}>Buy Now</button>
  );
};

export default Checkout;


// hello
// hello hii
