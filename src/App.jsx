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
import {data} from "data.js";
import MainLayout from "components/layout/MainLayout.jsx";

function App() {
    return (
        <MainLayout>
            <ResponsiveContainer width={"100%"} height={400}>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="pv" stackId="a" fill="#8884d8"/>
                    <Bar dataKey="amt" stackId="a" fill="#82ca9d"/>
                    <Bar dataKey="uv" fill="#ffc658"/>
                </BarChart>
            </ResponsiveContainer>
        </MainLayout>
    );
}

export default App;
