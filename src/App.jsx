// import MixedBarChart from "components/charts/MixedBarChart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "data.js";

function App() {
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      {/*<div style={{ width: "100%", height: "100%" }}>*/}
      <ResponsiveContainer width={"99%"} height={200}>
        <BarChart
          with={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
      {/*</div>*/}
    </div>
  );
}

export default App;
