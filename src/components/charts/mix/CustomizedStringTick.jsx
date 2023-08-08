import propTypes from "prop-types";
import { Text } from "recharts";

const CustomizedStringTick = ({ x, y, payload }) => {
  // const tspans = payload.value
  //   .split(" ")
  //   .map((value, index) => <tspan key={index}>{value}</tspan>);
  const offset = 1;

  return (
    <Text
      x={x}
      y={y + offset}
      style={{ fontSize: "14px" }}
      fill="#fff"
      textAnchor="middle"
      width="170"
      verticalAnchor="start"
      // angle={45}
      // scaleToFit={true}
    >
      {payload.value}
    </Text>
  );
};

CustomizedStringTick.propTypes = {
  x: propTypes.number,
  y: propTypes.number,
  payload: propTypes.object,
};

export default CustomizedStringTick;
