import PropTypes from "prop-types";
import { compactNumber } from "components/lib/utils.js";
import styles from "components/charts/mix/CustomTooltip.module.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip_container}>
        <p>{label}</p>
        {payload.map((item, index) => (
          <p key={index} className={styles.tooltip_item}>
            <span
              className={styles.tooltip_item_color}
              style={{ color: item.fill }}
            >
              {item.name} : <b>{compactNumber(item.value)}</b>
            </span>
          </p>
        ))}
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
