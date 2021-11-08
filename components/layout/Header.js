import ActiveLink from "/components/ActiveLink";
import {useEffect} from "react";
import styles from "./Header.module.css";

function Header() {
  let date = new Date();
  let time =
    date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}) +
    " UTC+2";

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let time =
        date.toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"}) +
        " UTC+2";
      document.getElementById("time").innerHTML = time;
    }, 1000);
  });

  return (
    <header className={styles.header}>
      <ul>
        <li>
          <ActiveLink href="/">.tram/workshop</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about">/statistics</ActiveLink>
        </li>
        <li>
          <img src="/Mobile/burger-menu.svg" alt="burger menu" />
        </li>
      </ul>
      <div className={styles.info}>
        <span>.actually in France</span>
        <span>.open to opportunities</span>
        <span id="time">{time}</span>
      </div>
    </header>
  );
}

export default Header;
