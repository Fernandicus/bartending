import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function calculateProgress(startDate: Date, endDate: Date): number {
  const now = new Date();
  const total = endDate.getTime() - startDate.getTime();
  const elapsed = now.getTime() - startDate.getTime();
  const progress = Math.min(Math.max(elapsed / total, 0), 1); // Limita entre 0 y 1
  return parseFloat((progress * 100).toFixed(2));
}

type Props = {
  startDate: Date;
  endDate: Date;
};
export function CircularChart({ startDate, endDate }: Props) {
  const progress = calculateProgress(startDate, endDate);

  const data = [
    { name: "Progress", value: progress },
    { name: "Remaining", value: 100 - progress },
  ];

  const COLORS = ["#4caf50", "#e0e0e0"]; // Verde para progreso, gris para restante

  return (
    <div style={{ width: 200, height: 200, position: "relative" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={0}
            dataKey="value"
            startAngle={90}
            endAngle={-270} // Giro horario
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {`${progress}%`}
      </div>
    </div>
  );
}
