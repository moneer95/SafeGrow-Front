import { NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";

// Configure PayPal environment
const clientId = "AXXL9Zy4gU8R2iMkav-yourclient"; // Replace with your sandbox client ID
const clientSecret = "ED-yoursecret"; // Replace with your sandbox client secret
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(request) {
  try {
    const { orderID } = await request.json();
    const captureRequest = new paypal.orders.OrdersCaptureRequest(orderID);
    captureRequest.requestBody({});

    const response = await client.execute(captureRequest);
    return NextResponse.json(response.result);
  } catch (error) {
    console.error("Error capturing PayPal payment:", error);
    return NextResponse.json({ error: "Failed to capture payment" }, { status: 500 });
  }
}