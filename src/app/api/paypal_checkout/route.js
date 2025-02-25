import { NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";

// Configure PayPal environment
const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST() {
  try {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00", // Set the amount
          },
        },
      ],
    });

    const response = await client.execute(request);
    return NextResponse.json({ id: response.result.id });
  } catch (error) {
    console.error("Error creating PayPal order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}