import PayPalCheckout from "../../components/PayPalCheckout";

export default function HomePage() {
  return (
    <div className="h-screen bg-slate-900 flex items-center justify-center">
      <PayPalCheckout />
    </div>
  );
}