import { useSlotProps } from "@mui/base";
import { Box } from "@mui/material";
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"


const PieChart = ({chartData}) => {
    console.log(useSlotProps, ChartJS);
    return (
        <Box>
            <Pie data={chartData}  />
        </Box>
    );
}
 
export default PieChart;