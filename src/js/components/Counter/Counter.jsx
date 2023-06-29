import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Counter({ value }) {
  return <div className={styles.counter}>{value}</div>;
}

Counter.propTypes = {
  value: PropTypes.number,
};

Counter.defaultProps = {
  value: 0,
};
