import css from "./PharmacyStatistics.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PharmacyStatistics({ statistics }) {
  const {
    visitsPerDay,
    employeesCount,
    yearsInBusiness,
    monthlyRevenue,
    areaSize,
    onlineOrdersPerMonth,
    customerSatisfaction,
    inventorySize,
    avgWaitingTimeMin,
    popularProducts = [],
  } = statistics;

  const barData = [
    { name: "Visits/Day", value: visitsPerDay },
    { name: "Employees", value: employeesCount },
    { name: "Years Active", value: yearsInBusiness },
    { name: "Online Orders", value: onlineOrdersPerMonth },
    { name: "Inventory", value: inventorySize },
  ];

  const radarData = [
    { subject: "Revenue", A: monthlyRevenue, fullMark: 100000 },
    { subject: "Area Size", A: areaSize, fullMark: 200 },
    { subject: "Satisfaction", A: customerSatisfaction, fullMark: 100 },
    { subject: "Wait Time", A: avgWaitingTimeMin, fullMark: 30 },
  ];

  const pieData = [
    { name: "Satisfied", value: customerSatisfaction },
    { name: "Unsatisfied", value: 100 - customerSatisfaction },
  ];

  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>Pharmacy Statistics</h2>

      <div className={css.chartGrid}>
        <div className={css.chartCard}>
          <h3>General Stats</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={css.chartCard}>
          <h3>Customer Satisfaction</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={60}
                label
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={css.chartCard}>
          <h3>Performance Radar</h3>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Stats"
                dataKey="A"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className={css.chartCard}>
          <h3>Popular Products</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={popularProducts}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#ff7300" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
