import { NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";

// Configure PayPal environment
const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req) {
  try {

    const body = await req.json();

    const { amount, currency } = body; // Extract amount from request

    console.log(currency)

    if (!amount || isNaN(amount)) {
        return NextResponse.json(
          { error: "Invalid amount provided" },
          { status: 400 }
        );
      }
    

    // Create a new order request
    const request = new paypal.orders.OrdersCreateRequest();

    // Set the request body
    request.body = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: currency=='EGP' ? (amount).toFixed(2) : amount.toFixed(2), 
          },
        },
      ],
    };

    // Execute the request
    const response = await client.execute(request);


    // Return the order ID to the client
    return NextResponse.json({ id: response.result.id });
  } catch (error) {
    // Log the full error for debugging
    console.error("Error creating PayPal order:", JSON.stringify(error, null, 2));

    // Return a user-friendly error message
    return NextResponse.json(
      { error: "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}