import "./Footer.css";
import IconList from "../../assets/img/icon_list.svg?react";
import IconCalendar from "../../assets/img/icon_calendar.svg?react";
import IconAdd from "../../assets/img/icon_add.svg?react";
import IconBurger from "../../assets/img/icon_burger.svg?react";
import IconGear from "../../assets/img/icon_gear.svg?react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="navigation">
      <Link className="icon-button" to="/lists">
        <IconList></IconList>
      </Link>

      <Link className="icon-button" to="/calendar">
        <IconCalendar></IconCalendar>
      </Link>

      <Link className="icon-button" to="/add-meal">
        <IconAdd></IconAdd>
      </Link>

      <Link className="icon-button" to="/meals">
        <IconBurger></IconBurger>
      </Link>

      <Link className="icon-button" to="/settings">
        <IconGear></IconGear>
      </Link>
    </footer>
  );
}

export default Footer;
