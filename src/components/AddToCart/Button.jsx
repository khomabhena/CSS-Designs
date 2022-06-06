import React from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsCart4, BsFillInboxFill } from 'react-icons/bs'

const Button = () => {

    const cartButtons = document.querySelectorAll('.cart-button')

    cartButtons.forEach(button => {
        button.addEventListener('click', cartClick);
    });

    function cartClick() {
        let button = this;
        // button.classList.add('clicked');
        button.className.add('clicked');
    }

  return (
      <div className="b-container">
        <button className="cart-button">
            <span className="add-to-cart">Add To Cart</span>
            <span className="added">Added</span>
            <i className='fas cart-icon'><BsCart4 /></i>
            <i className='fas cart-item'><BsFillInboxFill /></i>
        </button>
      </div>
  )
}

export default Button