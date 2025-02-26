"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function PayPalCheckout({ amount }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls smoothly to the top
  }, []); // Runs only once when the component mounts


  console.log(amount);
  return (
    <>
      <Navbar darkMode />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "150vh", 
          width: "100%", // Set a fixed width

        }}
      >
        <PayPalButtons
          style={{
            layout: "vertical",
            width: "100%", // Set a fixed width
            color: "silver"

          }}
          createOrder={async (data, actions) => {
            try {
              const res = await fetch("/api/paypal_checkout", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount }),
              });
              const order = await res.json();
              return order.id; // Return the order ID to PayPal
            } catch (error) {
              console.error("Error creating order:", error);
              throw error;
            }
          }}
          onApprove={async (data, actions) => {
            console.log("entered");
            try {
              const res = await fetch(`/api/capture`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderID: data.orderID }),
              });
              const captureData = await res.json();
              console.log("Payment captured:", captureData);
            } catch (error) {
              console.error("Error capturing payment:", error);
            }
          }}
          onError={(error) => {
            console.error("PayPal error:", error);
          }}
          onCancel={(data) => {
            console.log("Payment cancelled:", data);
          }}
        />
      </div>
    </>
  );
}
