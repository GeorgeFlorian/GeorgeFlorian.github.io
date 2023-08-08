import PropTypes from "prop-types";
import { compactNumber } from "components/lib/utils.js";
import styles from "components/charts/mix/CustomTooltip.module.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip_container}>
        <p className="label">{`${label} : ${compactNumber(
          payload[0].value,
        )}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default CustomTooltip;
