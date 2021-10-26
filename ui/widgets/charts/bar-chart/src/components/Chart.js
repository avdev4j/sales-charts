import {Bar} from "react-chartjs-2";

export const Chart = ({payload}) => {
    if(!payload || !Object.keys(payload).length) {
        return null;
    }
    const chartData = mapDataToChartJs(payload);

    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />
        </div>
    );
};

function mapDataToChartJs(payload) {
    const labels = [];
    const chartData = [];
    const CHART_COLORS = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };

    Object.entries(payload.data).map(([key, value]) => {
        labels.push(key);
        chartData.push(value);
    })

    return {
        labels: labels,
        datasets: [
            {
                label: payload.name,
                data: chartData,
                borderWidth: 2,
                backgroundColor: [CHART_COLORS.red, CHART_COLORS.orange, CHART_COLORS.yellow, CHART_COLORS.green, CHART_COLORS.blue, CHART_COLORS.purple, CHART_COLORS.grey]
            }
        ]
    }
}
