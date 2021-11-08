import ActiveLink from "/components/ActiveLink";
import {useEffect, useState} from "react";
import styles from "./Header.module.css";

function Header() {
  /* Burger menu */
  useEffect(() => {
    const burgerMenu = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const html = document.documentElement;
    let menuIsOpen = false;
    burgerMenu.addEventListener("click", () => {
      menuIsOpen = !menuIsOpen;
      if (menuIsOpen) {
        menu.classList.add(styles.active);
        html.classList.add(styles.noScroll);
      } else {
        menu.classList.remove(styles.active);
        html.classList.remove(styles.noScroll);
      }
    });

    const menuLinks = document.querySelectorAll("#menu ul:nth-of-type(1) a");
    for (let link = 0; link < menuLinks.length; link++) {
      menuLinks[link].addEventListener("click", () => {
        menu.classList.remove(styles.active);
        html.classList.remove(styles.noScroll);
      });
    }
  });

  /* Time */
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
      <div className={styles.burgerMenu} id="menu">
        <ul>
          <ActiveLink href="/">
            <li>/workshop</li>
          </ActiveLink>
          <ActiveLink href="/about">
            <li>/statistics</li>
          </ActiveLink>
        </ul>
        <ul>
          <a
            href="mailto:bichtrampham.design@gmail.com"
            rel="noreferrer noopener nofollow"
          >
            <li>/email</li>
          </a>
          <a
            href="https://www.linkedin.com/in/bichtrampham/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <li>/linkedIn</li>
          </a>
          <a
            href="https://www.instagram.com/tram.inprogress/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <li>/instagram</li>
          </a>
        </ul>
      </div>
      <ul>
        <li>
          <ActiveLink href="/">.tram/workshop</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about">/statistics</ActiveLink>
        </li>
        <li>
          <img id="burger" src="/Mobile/burger-menu.svg" alt="burger menu" />
        </li>
      </ul>
      <div className={styles.info}>
        <span>.actually in France</span>
        <span>.open to opportunities</span>
        <span id="time"></span>
      </div>
    </header>
  );
}

export default Header;
