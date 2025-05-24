import React, { useEffect } from "react";
import EmptyCartImg from "../../assets/empty-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/cart/CartContext";

const Cart = ({ cartOpen, setCartOpen }) => {
  console.log(cartOpen);

  const { cart, dispatch } = useCart();
  function Subtotal() {
    let totalPrice = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  }
  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest(".nav__cart__icon") && !e.target.closest(".cart")) {
        console.log(e.target);
        cartOpen ? setCartOpen(false) : "";
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [cartOpen]);
  return (
    <div className={`cart__wrapper ${cartOpen && "cart-open"}`}>
      <nav className="cart">
        <div className="cart__header">
          <h3 className="cart__header__title">Your Shopping Cart</h3>
          <button
            className="cart__header__close"
            onClick={() => setCartOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart__items">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart__item">
                <div className="cart__item__left">
                  <img
                    src={`https://ecommerce-samurai.up.railway.app/${item.images[0]}`}
                    alt=""
                    className="cart__item__img"
                  />
                </div>
                <div className="cart__item__mid">
                  <h4 className="cart__item__title">{item.name}</h4>
                  <span className="cart__item__price">
                    ${item.price * item.quantity}
                  </span>
                  <div className="cart__item__quantity">
                    <button
                      className="cart__item__quantity__btn"
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({
                            type: "ADD_ITEM",
                            payload: {
                              product: item,
                              quantity: -1,
                            },
                          });
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="cart__item__quantity__amount">
                      {item.quantity}
                    </span>
                    <button
                      className="cart__item__quantity__btn"
                      onClick={() => {
                        if (item.quantity >= 10)
                          alert("Maximum 10 products allowed");

                        dispatch({
                          type: "ADD_ITEM",
                          payload: {
                            product: item,
                            quantity: item.quantity < 10 ? 1 : 0,
                          },
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="cart__item__remove"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                />
              </div>
            ))
          ) : (
            <div className="cart__empty">
              <img src={EmptyCartImg} alt="" className="cart__empty__img" />
              <span className="cart__empty__text">Your cart is empty!</span>
              <button
                className="cart__empty__btn"
                onClick={() => setCartOpen(false)}
              >
                Keep Browsing
              </button>
            </div>
          )}
        </div>
        <div className="cart__footer">
          <div className="cart__footer__details">
            <h4 className="cart__footer__title">Subtotal</h4>
            <span className="cart__footer__subtotal">${Subtotal()}</span>
          </div>
          {cart.length > 0 && (
            <button
              className="cart__footer__btn"
              onClick={() => alert("Haven't implemented this feature yet!")}
            >
              Go to checkout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Cart;
