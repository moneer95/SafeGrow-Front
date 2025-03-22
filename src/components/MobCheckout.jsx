import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const PayForm = ({ amount, products_ids, isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle payment processing
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/paymob-intention", {
        amount,
        currency: "EGP",
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        phone_number: userData.phone,
        products_ids: products_ids
      });

      if (response.data.client_secret) {
        window.location.href = `https://accept.paymob.com/unifiedcheckout/?publicKey=${process.env.NEXT_PUBLIC_PAYMOB_PUBLIC_KEY}&clientSecret=${response.data.client_secret}`;
      }
    } catch (error) {
      console.error("❌ Payment Failed:", error);
      alert("Payment failed, please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 -z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Complete Your Purchase
            </h2>

            {/* Payment Form */}
            <form onSubmit={handlePayment} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={userData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#009688] text-white p-3 rounded-lg hover:bg-[#009688]/90 transition"
              >
                {loading ? "Processing..." : `Pay ${amount} $`}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PayForm;
