"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalCheckout() {
  return (
    <PayPalButtons
      style={{ layout: "vertical", color: "silver" }}
      createOrder={async (data, actions) => {
        try {
          const res = await fetch("/api/paypal_checkout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const order = await res.json();
          return order.id; // Return the order ID to PayPal
        } catch (error) {
          console.error("Error creating order:", error);
          throw error;
        }
      }}
      onApprove={async (data, actions) => {
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
  );
}