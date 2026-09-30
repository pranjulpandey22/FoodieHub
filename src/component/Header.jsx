import "../css/Header.css";
import { FOODIE_LOGO } from "../utils/constant"

const Header = () => {
//   const Foodie = new URL("../../Image/Foodie.png", import.meta.url).href;

  return (
    <div className="nav-bar">
      <div className="image">
        <img src={FOODIE_LOGO} alt="FoodieHUB Logo" />
      </div>

      <div className="header-right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/" className="cart">
              🛒 Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
