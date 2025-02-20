import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the incoming JSON payload correctly
    const body = await req.json();
    console.log("Received Data:", body);

    const { amount, currency, first_name, last_name, email, phone_number, products_ids } = body;


    if (!amount || !first_name || !last_name || !phone_number || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const secretKey = process.env.PAYMOB_SECRET_KEY;
    const integrationId = parseInt(process.env.PAYMOB_INTEGRATION_ID, 10);

    const response = await axios.post(
      "https://accept.paymob.com/v1/intention/",
      {
        amount: amount * 100, // Convert to cents
        currency: currency || "EGP",
        payment_methods: [integrationId],
        billing_data: {
          first_name,
          last_name,
          phone_number,
          email,
          country: "EG",
        },
        redirection_url: "https://yourwebsite.com/payment-success",
        notification_url: "https://yourwebhook.com/notify",
        expiration: 3600,
        // Add product IDs
        metadata: {
          products_ids: products_ids, // Sending the array of product IDs
        },

      },
      {
        headers: {
          Authorization: `Token ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Paymob Response:", response.data);


    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("❌ Paymob API Error:", error.response?.data || error.message);
    return NextResponse.json(
      {
        error: "Payment request failed",
        details: error.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}
