import propTypes from "prop-types";
import { Text } from "recharts";

const CustomStringTick = ({ x, y, payload }) => {
  const offset = 1;

  if (payload.value)
    return (
      <Text
        x={x}
        y={y + offset}
        style={{ fontSize: "14px" }}
        fill="#fff"
        textAnchor="middle"
        width="100"
        verticalAnchor="start"
      >
        {payload.value}
      </Text>
    );
  return null;
};

CustomStringTick.propTypes = {
  x: propTypes.number,
  y: propTypes.number,
  payload: propTypes.object,
};

export default CustomStringTick;
