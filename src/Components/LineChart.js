import { useSlotProps } from "@mui/base";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"


const LineChart = ({chartData, ratio, axis}) => {

    console.log(useSlotProps, ChartJS);
    
    const options ={
        width: 200,  // Increase chart width
        height: 600,  // Increase chart height
        // barThickness: 50, 
        indexAxis: axis,
        maintainAspectRatio: true,
        aspectRatio: ratio? ratio:1,
        scales: {
            xAxes: [{
                ticks: {
                    // max: 10  // Show up to 8 values
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 10  
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