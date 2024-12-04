import React, { useContext, useState } from "react";
import { cartContext } from "../CartContext/CartContext";

function CheckOut() {
  const { cartItem } = useContext(cartContext);
  const [formData, setFormData] = useState({
    fname: "",
    comName: "",
    streetName: "",
    apartment: "",
    town: "",
    num: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="d-flex flex-row justify-content-evenly gap-4">
        <div>
          <h2>Billing Details</h2>
          <form onSubmit={handleSubmit}>
            {[
              { id: "fname", label: "First Name", required: true },
              { id: "comName", label: "Company Name" },
              { id: "streetName", label: "Street Address", required: true },
              { id: "apartment", label: "Apartment, floor, etc." },
              { id: "town", label: "Town/City", required: true },
              { id: "num", label: "Phone Number", required: true, type: "tel" },
              { id: "email", label: "Email Address", required: true, type: "email" },
            ].map((field) => (
              <div key={field.id} className="d-flex flex-column gap-3">
                <label htmlFor={field.id}>
                  {field.label} {field.required && <span className="text-danger">*</span>}
                </label>
                <input className='p-2 form-input' style={{border:'none', backgroundColor:'rgba(245, 245, 245, 1)', width:'470px'}}
                  id={field.id}
                  type={field.type || "text"}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required={field.required}
                />
              </div>
            ))}
            <button type="submit" className="btn mt-3 text-light px-5" style={{backgroundColor:'rgba(219, 68, 68, 1)'}}>
              Place Order
            </button>
          </form>
        </div>

        <div className="d-flex flex-column px-1">
          <div>
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="cart-row py-3 ps-4 d-flex justify-content-evenly align-items-center"
              >
                <div style={{ flex: 2 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mx-2"
                    width={"48px"}
                    height={"42px"}
                  />
                  {item.title}
                </div>
                <div style={{ flex: 1 }}>${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className='d-flex flex-row justify-content-between align-item-center my-2'>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className='w-100 bg-black' style={{height:'0.5px'}}></div>
                <div className='d-flex flex-row justify-content-between my-2'>
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className='w-100 bg-black' style={{height:'0.5px'}}></div>
                <div className='d-flex flex-row justify-content-between my-2'>
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
