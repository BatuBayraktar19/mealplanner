import "./Header.css";
import IconChefHat from "../../assets/img/icon_chef_hat.svg?react";
import IconLogin from "../../assets/img/icon_login.svg?react";
import { Link, useLocation } from "react-router-dom";

function Header({ title }: { title?: string }) {
  const location = useLocation();
  console.log("loc", location.pathname);

  return (
    <header>
      <h1>{title}</h1>
      <IconChefHat></IconChefHat>

      <Link className="login-button icon-button" to="/login">
        <IconLogin></IconLogin>
      </Link>
    </header>
  );
}

export default Header;
