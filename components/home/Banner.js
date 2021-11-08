import Head from "next/head";
import {useEffect} from "react";
import styles from "./Banner.module.css";
import ActiveLink from "/components/ActiveLink";

function Banner(props) {
  useEffect(() => {
    const action = document.getElementById("projectAction");
    const banner = document.getElementById("projectBanner");
    action.addEventListener("mouseover", () => {
      banner.classList.add(styles.hover);
    });
    action.addEventListener("mouseleave", () => {
      banner.classList.remove(styles.hover);
    });
  });
  return (
    <section className={styles.banner}>
      <Head>
        <link rel="preload" href="/Image Home/1.jpeg" as="image" />
        <link rel="preload" href="/Image Home/Hover/1.jpeg" as="image" />
      </Head>
      <div className={styles.bannerContainer}>
        <ActiveLink href="/project/1">
          <div className={styles.projectAction} id="projectAction"></div>
        </ActiveLink>
        <img
          className={styles.glassOne}
          src="/Icons habillage/Glass/Glass-1.svg"
          alt="Glass1"
        />
        <img
          className={styles.glassTwo}
          src="/Icons habillage/Glass/Glass-2.svg"
          alt="Glass2"
        />
        <div className={styles.blur}>
          <img src="/Icons habillage/Blur.png" alt="Blur" />
        </div>
        <p className={styles.projectId}>01</p>
        <div className={styles.bannerRow}>
          <img
            className={styles.arrow}
            src="Icons habillage/Arrow.svg"
            alt="Arrow"
          />
          <div className={styles.bannerColumn}>
            <div className={styles.projectImg} id="projectBanner"></div>
            <ActiveLink href="/project/1">
              <p className={styles.title}>{props.projects[0]["name"]}</p>
              <p>
                {props.projects[0]["job"]}
                <br />
                {props.projects[0]["detail"]}
              </p>
            </ActiveLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
