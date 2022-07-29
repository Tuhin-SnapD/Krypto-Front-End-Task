import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles.css"

const Checkout = () => {
  return (
    <div className="content">
  <div className="wrappes">
    <div className="wrappest">
      <h1>Thank you !</h1>
      <p>Your order has been placed </p>
      <p>you should receive your items within 5 days  </p>

    </div>
    <div className="footer-like">
      <p>Confirmation not received?
       <a><NavLink to="/products">Click here</NavLink> to return to main page</a>
      </p>
    </div>
</div>
</div>
  )
}

export default Checkout