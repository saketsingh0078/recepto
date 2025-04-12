import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
  CartesianGrid,
} from "recharts";

export default function Graph({ data, ticks, chartClass, referenceLineClass }) {
  const currentPointIndex = data.findIndex((item) => item.isCurrentPoint);
  const gradientId = `gradient-${chartClass.replace("#", "")}`;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded-md border border-gray-200">
          <p className="font-medium text-md">{`${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full text-sm scale-105">
      <div className="flex flex-col h-full lg:flex-row gap-6">
        <div className="flex-1 h-full">
          <div className="h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={chartClass}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="90%"
                      stopColor={chartClass}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  tickMargin={8}
                  tickLine={false}
                  dataKey="name"
                  axisLine={false}
                />

                <YAxis
                  ticks={ticks}
                  tickMargin={8}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={chartClass}
                  fillOpacity={1}
                  fill={`url(#${gradientId})`}
                />

                <ReferenceLine
                  x={data[currentPointIndex].name}
                  stroke={referenceLineClass}
                  strokeWidth={1}
                  label={
                    <Label
                      value={data[currentPointIndex].value}
                      position="top"
                      fill={referenceLineClass}
                      fontSize={14}
                      fontWeight="bold"
                    />
                  }
                />

                <Area
                  type="monotone"
                  dataKey={(entry) =>
                    entry.isCurrentPoint ? entry.value : null
                  }
                  stroke={referenceLineClass}
                  fill={referenceLineClass}
                  strokeWidth={0}
                  dot={{
                    r: 4,
                    fill: "#FFFFFF",
                    stroke: chartClass,
                    strokeWidth: 3,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
