

import { useDispatch, useSelector } from "react-redux";

import {
    addToCart
} from "../features/counter/counterSlice";
const Header = () => {

     const count = useSelector((state) => state.counter.value);
  return (
    <header className="header">
        <div className="logo">
            <img src="https://fakestoreapi.com/icons/logo.png" alt="Zepto Logo" />
        </div>
        <div className="search-bar">
            <input type="text"  placeholder="Search products..." />
            <button>Search</button>
        </div>
        <div className="cart">
            <button style={{ position: "relative" }}>
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{count}</span>
            </button>
        </div>
    </header>
  );
};

export default Header;