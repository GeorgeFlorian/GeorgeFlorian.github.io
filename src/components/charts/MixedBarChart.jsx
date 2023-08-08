import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { transformData, Q4_CHART_DATA } from "data.js";
import { tickNumberFormatter } from "components/lib/utils.js";
import CustomStringTick from "components/charts/mix/CustomStringTick.jsx";
import CustomTooltip from "components/charts/mix/CustomTooltip.jsx";

export default function MixedBarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <BarChart
        data={transformData(Q4_CHART_DATA)}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          type={"category"}
          tick={<CustomStringTick />}
          interval={0}
        />
        <YAxis unit={"$"} tickFormatter={tickNumberFormatter} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ bottom: -20 }} />
        <Bar
          dataKey="Domestic Public Expenditures"
          stackId="a"
          fill="#8884d8"
        />
        <Bar dataKey="Domestic Public Subsidies" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Domestic Public Revenues" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
}
