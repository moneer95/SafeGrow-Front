"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import { useCart } from "../../lib/hooks/useCart";


export default function PayPalCheckout() {
  const router = useRouter(); // Initialize router
  const { total } = useCart();



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls smoothly to the top
  }, []); // Runs only once when the component mounts


  return (
    <>
      <div
        style={{
          maxHeight: "90vh", // Ensures full screen coverage
          width: "100%",
          padding: "20px", // Adds spacing for small screens
          overflow: "scroll"
        }}
      >
        <PayPalButtons
          style={{
            layout: "vertical",
            width: "100%",
            color: "silver",
          }}
          createOrder={async (data, actions) => {
            console.log('111')
            try {
              const res = await fetch("/api/paypal_checkout", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: total().toFixed(2) }),
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

              // Extract relevant order details
              const orderDetails = {
                orderId: captureData.id,
                status: captureData.status,
                payer: captureData.payer,
                payerName: `${captureData.payer.name.given_name} ${captureData.payer.name.surname}`,
                payerEmail: captureData.payer.email_address,
                payerPhone: captureData.payer.phone?.phone_number?.national_number || "Not provided", // Extract phone
                amount: captureData.purchase_units[0].amount.value,
                currency: captureData.purchase_units[0].amount.currency_code,
                transactionId: captureData.purchase_units[0].payments.captures[0].id,
              };

              // Redirect user to success page
              router.push(`/success?orderID=${data.orderID}`);

              // Send order to Frappe
              await createFrappeOrder(orderDetails);


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







async function createFrappeOrder(orderData) {
  const baseUrl = process.env.FRAPPE_BASE_URL;
  const credentials = btoa(`${process.env.FRAPPE_API_TOKEN}:${process.env.FRAPPE_API_SECRET}`);
  const authHeader = `token ${credentials}`;

  try {
    const res = await fetch("https://dash.safe-grow.com/api/resource/Orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader
      },
      body: JSON.stringify({
        order_id: orderData.orderId,
        status: orderData.status,
        customer_name: orderData.payerName,
        customer_email: orderData.payerEmail,
        customer_phone: orderData.payerPhone, // Send phone number
        currency: orderData.currency,
        amount: orderData.amount,
        transaction_id: orderData.transactionId
      }),
    });

    const responseData = await res.json();
    console.log("Frappe Order Created:", responseData);
  } catch (error) {
    console.error("Error creating order in Frappe:", error);
  }
}
