import { NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(request) {
  try {
    const { orderID } = await request.json();
    
    if (!orderID) {
      return NextResponse.json({ error: "Missing order ID" }, { status: 400 });
    }

    const captureRequest = new paypal.orders.OrdersCaptureRequest(orderID);
    captureRequest.requestBody({});

    const response = await client.execute(captureRequest);
    
    return NextResponse.json(response.result);
  } catch (error) {
    console.error("Error capturing PayPal payment:", error);
    return NextResponse.json({ error: "Failed to capture payment" }, { status: 500 });
  }
}
