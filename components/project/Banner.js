import styles from "./Banner.module.css";
import FadeInOnView from "/components/FadeInOnView";

function Banner(props) {
  return (
    <section className={styles.banner}>
      <FadeInOnView>
        <img
          className={styles.upperArrow}
          src="/Icons habillage/little-ship-arrow.svg"
          alt="Upper arrow"
        />
        <img
          className={styles.bannerImg}
          src={`/Image Home/${props.project.id}.jpeg`}
          alt="Banner image"
        />
        <div className={styles.blur}>
          <img src="/Icons habillage/Blur.png" alt="Blur" />
        </div>
      </FadeInOnView>
      <div className={styles.underBanner}>
        <FadeInOnView>
          <img
            className={styles.arrow}
            src="/Icons habillage/Arrow.svg"
            alt="Arrow"
          />
          <img
            className={styles.glass}
            src="/Icons habillage/0-glass-projet/projet-glass-1.svg"
            alt="Glass"
          />
        </FadeInOnView>
        <div className={styles.flex}>
          <FadeInOnView>
            <div className={styles.title}>
              <h1>{props.project.name}</h1>
              <p>
                {props.project.job}
                <br />
                {props.project.detail}
              </p>
              <div>
                {Array(props.roles.length)
                  .fill(null)
                  .map((e, i) => (
                    <p key={`role-${i + 1}`}>&gt;{props.roles[i].role}</p>
                  ))}
              </div>
            </div>
          </FadeInOnView>
          <FadeInOnView>
            <div className={styles.desc}>
              <h2>{props.project.descTitle}</h2>
              <p>{props.project.desc}</p>
              {props.project.link ? (
                <a
                  className="noTransition go"
                  href={props.project.link}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <div className={styles.link}>
                    <p>see live</p>
                    <img
                      src="/Icons habillage/link/arrow-up-right.svg"
                      alt="Arrow up"
                    />
                    <img
                      src="/Icons habillage/see-live-line.svg"
                      alt="Underline"
                    />
                  </div>
                </a>
              ) : null}
            </div>
          </FadeInOnView>
        </div>
      </div>
    </section>
  );
}

export default Banner;
