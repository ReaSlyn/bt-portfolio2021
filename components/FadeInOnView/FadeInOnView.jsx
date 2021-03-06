import {InView} from "react-intersection-observer";
import styles from "./FadeInOnView.module.css";

/* Make the element appear when it is in the viewport once per page change */
function FadeInOnView(props) {
  return (
    <InView
      threshold={0}
      triggerOnce={true}
      onChange={(inView, entry) => {
        if (inView) {
          entry.target.classList.add(styles.fadeIn);
        }
      }}
      className={styles.initial}
    >
      {props.children}
    </InView>
  );
}

export default FadeInOnView;
