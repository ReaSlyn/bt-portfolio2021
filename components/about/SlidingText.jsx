import styles from "./SlidingText.module.css";

/* Sliding text animation section of the about page */
function SlidingText() {
  return (
    <section className={styles.slidingText}>
      {/* Background decoration */}
      <div className={styles.fade}></div>
      <div className={styles.fade}></div>
      <img
        className={styles.lines}
        src="/Image About/habillage/about-lines.svg"
        alt="About lines"
      />
      {/* Text scrolling horizontally */}
      <div className={styles.scroll}>
        <div>
          <p>
            KPI & Data driven
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Explore, test, optimize
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Research & docs
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
          </p>
        </div>
        <div>
          <p>
            KPI & Data driven
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Explore, test, optimize
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Research & docs
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
          </p>
        </div>
      </div>
      {/* Background decoration */}
      <img
        className={styles.lines}
        src="/Image About/habillage/about-lines-2.svg"
        alt="About lines"
      />
    </section>
  );
}

export default SlidingText;
