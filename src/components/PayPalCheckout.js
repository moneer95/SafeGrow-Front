"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import { useCart } from "../../lib/hooks/useCart";


export default function PayPalCheckout(currency) {
  const router = useRouter(); // Initialize router
  const { total, items } = useCart();



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
                body: JSON.stringify({ amount: total(), currency }),
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
                amount: captureData.purchase_units[0].amount?.value,
                currency: captureData.purchase_units[0].amount?.currency_code,
                transactionId: captureData.purchase_units[0].payments?.captures[0]?.id,
                items
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
  const authHeader = `token 3134f21ff00eef5:8bd21a397796b3d`;

  try {
    const payload = {
      order_id: orderData.orderId,
      status: orderData.status,
      customer_name: orderData.payerName,
      customer_email: orderData.payerEmail,
      customer_phone: orderData.payerPhone,
      currency: orderData.currency,
      amount: orderData.amount,
      transaction_id: orderData.transactionId,
      items: orderData.items.map(item => ({
        item_code: item.id,
        item_name: item.name,
        qty: item.quantity,
        rate: item.price,
        amount: item.quantity * item.price
      }))
    };

    console.log("📤 Sending Data:", JSON.stringify(payload));

    const res = await fetch(`https://dash.safe-grow.com/api/resource/Orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader
      },
      body: JSON.stringify(payload)
    });

    const responseText = await res.text();
    console.log("✅ Response:", responseText);

    if (!res.ok) {
      throw new Error(`Frappe API Error: ${res.status} ${res.statusText} - ${responseText}`);
    }

    return JSON.parse(responseText);
  } catch (error) {
    console.error("🚨 Error creating order in Frappe:", error);
  }
}
