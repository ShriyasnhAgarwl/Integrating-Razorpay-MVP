import React, { useEffect } from "react";

export default function RazorPayApp() {
  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "5000000", //  = INR 1
    name: "Testing Payment",
    currency: "INR",
    description: "1 x Apple Iphone 15",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHN5OKgQwIesg/profile-displayphoto-shrink_200_200/0/1676537167942?e=1716422400&v=beta&t=t-OQxmNOOXz4SZiYqtNr63PCs8MXnPRgalu6T8XWMiY",
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: "Shriyansh",
      contact: "9999999999",
      email: "demo_user@demo_email.com",
    },
    notes: {
      address: "Kirti Nagar, Sector-15 Part-1, Gurugram",
    },
    theme: {
      color: "#DE3163",
      hide_topbar: false,
    },
  };

  const openPayModal = (options) => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="parent">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQHN5OKgQwIesg/profile-displayphoto-shrink_200_200/0/1676537167942?e=1716422400&v=beta&t=t-OQxmNOOXz4SZiYqtNr63PCs8MXnPRgalu6T8XWMiY"
        className="image"
        alt=""
      />
      <h5 className="title">Integrating the RazorPay SDK</h5>
      <button onClick={() => openPayModal(options)} className="button">
        Pay Now
      </button>
    </div>
  );
}
