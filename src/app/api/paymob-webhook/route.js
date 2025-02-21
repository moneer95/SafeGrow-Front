import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse Paymob webhook payload
    const body = await req.json();
    console.log("🔔 Paymob Webhook Received:", body);

    // Extract needed fields from the payload
    const { obj } = body;

    // Access the product_ids from metadata
    const productIds = obj?.metadata?.product_ids || [];
    console.log("🛒 Product IDs:", productIds);
    

    //Check if the payment is successful
    if (obj && obj.success) {
      console.log("✅ Payment Successful for Order ID:", obj);

      // TODO: Update your database or trigger any post-payment logic here
    } else {
      console.log("❌ Payment Failed or Incomplete for Order ID:", obj?.order?.id);
    }

    // Respond with 200 OK to acknowledge receipt
    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
  } catch (error) {
    console.error("⚠️ Webhook Error:", error.message);
    return NextResponse.json(
      { error: "Webhook handling failed", details: error.message },
      { status: 500 }
    );
  }
}
