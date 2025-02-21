import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse Paymob webhook payload
    const body = await req.json();
    console.log("🔔 Full Paymob Webhook Payload:", JSON.stringify(body, null, 2));

    // Extract needed fields from the payload
    const { obj } = body;

    // Try accessing metadata directly
    const metadata = obj?.metadata || {};
    console.log("📦 Metadata Object:", metadata);

    // Access product_ids if available
    const productIds = metadata.product_ids || [];
    console.log("🛒 Product IDs:", productIds);

    // Check if the payment is successful
    if (obj && obj.success) {
      console.log("✅ Payment Successful for Order ID:", obj.order?.id);

      // TODO: Update your database or trigger any post-payment logic here
    } else {
      console.log("❌ Payment Failed or Incomplete for Order ID:", obj?.order?.id);
    }

    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
  } catch (error) {
    console.error("⚠️ Webhook Error:", error.message);
    return NextResponse.json(
      { error: "Webhook handling failed", details: error.message },
      { status: 500 }
    );
  }
}
