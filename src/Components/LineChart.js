import { useSlotProps } from "@mui/base";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"


const LineChart = ({chartData, ratio}) => {

    const options ={
        // barThickness: 50, 
        // indexAxis: axis,
        title: {
            display: true,
            text: 'Overall Data Amalysis'
        },
        maintainAspectRatio: true,
        aspectRatio: ratio,
        scales: {
            xAxes: [{
                ticks: {
                    // max: 10  // Show up to 8 values
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Y-axis label'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 10  
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Y-axis label'
                }
            }]
        }
    }

    return (
        <Box>
            <Line data={chartData} options={options}  />
        </Box>
    );
}
 
export default LineChart;